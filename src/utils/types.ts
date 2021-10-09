import { ReactNode } from 'react';

export type Coordinates = {
  coords: {
    longitude: number;
    latitude: number;
  }
}
export type WeatherData = {
  weather: [{
    id: number;
    main: string;
    description: string;
    icon: string;
  }]
  date: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  }
  name: string;
  wind: {
    speed: number;
  }
  sys:{
    country: string;
  }
}
export type WeatherDetailsProps = {
  details: WeatherData[];
}
export type WeatherContextProps = {
  getGenre: (number: number) => void;
  getPlaylist: (arr: PlaylistData[]) => void;
  getWeatherData: (data: WeatherData[]) => void;
  handleInputValue: (text: string) => void;
  inputValue: string;
  genre: string;
  playlist: PlaylistData[];
  weatherData: WeatherData[];
}
export type WeatherProviderProps ={
  children: ReactNode;
}
export type PlaylistResponse = {
  tracks: {
      hits: [
       {
         track:{

           images:{
             coverart: string;
            },
            url: string,
            title: string,
            subtitle: string,
          }
      },
    ]

  }
}
export type PlaylistData = {
  track:{
    images:{
      coverart: string;
     },
     url: string,
     title: string,
     subtitle: string,
   }
}
export type SearchProps = {
  getWeatherByInputValue: () => void;
}
export type DisplayPlaylist = {
  genre: string;
  weather: WeatherData[];
  playlist: PlaylistData[];
  id: string;
}
export type HeaderProps = {
  getCoords: () => void;
}
