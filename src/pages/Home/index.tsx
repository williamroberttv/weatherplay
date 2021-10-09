import {
  Box, Button, Flex, Text,
} from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useWeather } from '../../context/weatherContext';
import { Coordinates, PlaylistResponse, WeatherData } from '../../utils/types';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { WeatherDetails } from '../../components/WeatherDetails';
import { shazamApi, weatherApi } from '../../services/api';
import { formatData } from '../../utils/formatData';

export function Home() {
  const history = useHistory();
  const [coordinates, setCoordinates] = useState<Coordinates>();
  const {
    weatherData,
    genre, getGenre, getPlaylist, getWeatherData, inputValue,
  } = useWeather();

  const getWeatherByCoords = async () => {
    const { data }: AxiosResponse<WeatherData> = await weatherApi('', {
      params: {
        lat: coordinates?.coords.latitude,
        lon: coordinates?.coords.longitude,
      },
    });

    const formatedData = formatData(data);

    getGenre(formatedData.main.temp);
    getWeatherData([formatedData]);
  };

  const getWeatherByInputValue = async () => {
    const { data }: AxiosResponse<WeatherData> = await weatherApi('', {
      params: {
        q: inputValue,
      },
    });
    const formatedData = formatData(data);
    getGenre(formatedData.main.temp);
    getWeatherData([formatedData]);
  };

  const getCoords = async () => {
    navigator.geolocation.getCurrentPosition(
      (position) => setCoordinates(position),
    );
  };

  const handlePlaylist = async () => {
    const { data } : AxiosResponse<PlaylistResponse> = await shazamApi(
      '',
      {
        params: {
          term: genre,
        },
      },
    );
    const usedData = data.tracks.hits.map((item) => item);
    getPlaylist(usedData);
    history.push('/playlists');
  };

  useEffect(() => {
    if (coordinates) {
      getWeatherByCoords();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  return (
    <Box>
      <Header getCoords={getCoords} />

      <Search getWeatherByInputValue={getWeatherByInputValue} />

      {weatherData.length > 0 ? <WeatherDetails details={weatherData} /> : (
        <Flex direction="column" w="80%" m="50px auto">
          <Text fontSize="28px">Sobre</Text>
          <Text mt="20px" m="50px auto">
            O WeatherPlay faz recomendações de playlist,
            dos mais variados gêneros,
            baseado no clima atual da sua cidade.
            Para começar faça a busca pela sua cidade ou
            permita-nos usar sua localização, conceda
            a permissão clicando
            no botão
            <span style={{ fontWeight: 'bold', color: '#8072ee' }}>
              {' Localização '}
            </span>
            na parte superior direita da sua tela.
          </Text>
        </Flex>
      )}

      {weatherData.length > 0 && (
      <Box align="center" w="300px" m="20px auto">
        <Text mb="20px">Sua playlist está pronta, confira!</Text>
        <Button
          w="100%"
          height="50px"
          p="0"
          type="button"
          onClick={handlePlaylist}
          bg="#8067E5"
          transition="filter 0.2s"
          _hover={{ filter: 'brightness(0.9)' }}
        >
          Playlist
        </Button>
      </Box>
      )}
    </Box>
  );
}
