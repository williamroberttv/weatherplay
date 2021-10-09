import {
  createContext, useCallback, useContext, useState,
} from 'react';
import {
  PlaylistData,
  WeatherContextProps, WeatherData, WeatherProviderProps,
} from '../utils/types';

const WeatherContext = createContext({} as WeatherContextProps);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [genre, setGenre] = useState<string>('');
  const [playlist, setPlaylist] = useState<PlaylistData[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  const [inputValue, setInputValue] = useState<string>('');

  const getGenre = useCallback((number: number) => {
    if (number > 32) {
      setGenre('rock');
    } else if (number > 24 && number < 32) {
      setGenre('pop');
    } else if (number > 16 && number < 24) {
      setGenre('classic');
    } else {
      setGenre('lofi');
    }
  }, []);

  const getPlaylist = useCallback((arr: PlaylistData[]) => {
    setPlaylist(arr);
  }, []);

  const getWeatherData = useCallback((data: WeatherData[]) => {
    setWeatherData(data);
  }, []);

  const handleInputValue = useCallback((text: string) => {
    setInputValue(text);
  }, []);

  return (
    <WeatherContext.Provider value={{
      getGenre,
      getPlaylist,
      genre,
      playlist,
      getWeatherData,
      weatherData,
      inputValue,
      handleInputValue,
    }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => useContext(WeatherContext);
