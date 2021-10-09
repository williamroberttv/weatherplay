import {
  Flex, Text, Image, Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import { CgDetailsMore } from 'react-icons/cg';
import { BsArrowLeft, BsFillPlayCircleFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useWeather } from '../../context/weatherContext';
import { DisplayPlaylist } from '../../utils/types';

export function Playlists() {
  const {
    genre, playlist, getPlaylist, weatherData, getWeatherData,
  } = useWeather();
  const [displayPlaylist] = useState<DisplayPlaylist>({
    genre,
    weather: weatherData,
    playlist,
    id: (Math.random() * 100000).toFixed(0),
  });
  const [savedPlaylists, setSavedPlaylists] = useState<DisplayPlaylist[]>([]);

  const getSavedPlaylists = () => {
    setSavedPlaylists((state) => [...state, displayPlaylist]);
    localStorage.setItem('playlist', JSON.stringify(savedPlaylists));
  };

  const handleDelete = (id: string) => {
    const withoutDeletedItem = savedPlaylists.filter((item) => item.id !== id);
    localStorage.setItem('playlist', JSON.stringify(withoutDeletedItem));
    setSavedPlaylists(withoutDeletedItem);
  };

  const localStoragePlaylists = localStorage.getItem('playlist');

  useEffect(() => {
    if (savedPlaylists.length === 0 && localStoragePlaylists) {
      setSavedPlaylists(JSON.parse(localStorage.getItem('playlist') as string));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (savedPlaylists.length > 0) {
      localStorage.setItem('playlist', JSON.stringify(savedPlaylists));
    }
  }, [savedPlaylists]);

  return (
    <Flex direction="column">
      <Flex justifyContent="space-between" align="center" w="80%" m="20px auto">
        <Link to="/"><BsArrowLeft size={26} color="#8067E5" /></Link>
        <Text fontSize="28px">WeatherPlay</Text>
      </Flex>
      <Flex direction="column" w="80%" m="20px auto">
        <Flex
          w="100%"
          align="center"
          m="20px 0"
          justifyContent={['center', 'flex-start']}
        >
          <Text
            mr="16px"
            fontSize="22px"
            fontWeight="700"
          >
            {genre.toUpperCase()}

          </Text>
          {weatherData.map((item) => (
            <Flex key={item.weather[0].id}>
              <Text
                mr="16px"
                fontSize="18px"
              >
                {item.name}

              </Text>
              <Text
                mr="16px"
                fontSize="18px"
              >
                {`${item.main.temp.toFixed(0)}°`}

              </Text>
              <Text fontSize="18px">{item.date}</Text>
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" w="100%" m="0 auto">
          {playlist.map((list) => (
            <Flex
              key={list.track.url}
              bg="#141414"
              borderRadius="10px"
              mb="20px"
              p="20px"
              alignItems="center"
              direction={['column', 'row']}
              justifyContent="space-between"
            >
              <Image w="60px" h="60px" src={list.track.images.coverart} />

              <Text
                fontSize="18px"
                fontWeight="700"
                m={['10px 0', '0 0 0 16px']}
                w="120px"
                align="center"
              >
                {list.track.title}
              </Text>
              <Text
                fontSize="18px"
                align="center"
                m={['10px 0', '0 16px']}
                w="120px"
              >
                {list.track.subtitle}

              </Text>
              <Link to={{ pathname: list.track.url }} target="_blank">
                <BsFillPlayCircleFill size={26} color="#8067E5" />
              </Link>
            </Flex>
          ))}
          <Button
            onClick={getSavedPlaylists}
            w="200px"
            alignSelf="flex-end"
            bg="#8067e5"
            transition="filter 0.2s"
            _hover={{ filter: 'brightness(0.9)' }}
          >
            Salvar
          </Button>
        </Flex>
        <Flex direction="column" m="20px 0">
          <Text fontSize="18px" fontWeight="bold">Playlists Salvas</Text>
          {savedPlaylists.length > 0 && savedPlaylists.map(
            (item) => (
              <Flex
                key={item.id}
                bg="#8067E5"
                p="20px"
                borderRadius="8px"
                m="20px 0"
              >
                <Flex direction="column">
                  <Text mr="16px">{item.genre.toUpperCase()}</Text>
                  {item.weather.map((data) => (
                    <>
                      <Text mr="16px">{data.name}</Text>
                      <Text mr="16px">{`${data.main.temp.toFixed(0)}°`}</Text>
                      <Text>{data.date}</Text>
                    </>
                  ))}
                </Flex>
                <Flex>
                  <Button
                    bg="#8067E5"
                    ml="10px"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FiTrash size={22} />
                  </Button>
                  <Button
                    type="button"
                    bg="#8067E5"
                    ml="10px"
                    onClick={() => {
                      getPlaylist(item.playlist);
                      getWeatherData(item.weather);
                    }}
                  >
                    <CgDetailsMore size={22} />
                  </Button>
                </Flex>
              </Flex>
            ),
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
