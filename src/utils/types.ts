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
