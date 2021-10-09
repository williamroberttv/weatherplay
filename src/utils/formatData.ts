import { format } from 'date-fns';
import { WeatherData } from './types';

export const formatKelvinToCelsius = (
  temperature: number,
):number => (temperature - 273.15);

export const formatData = (data: WeatherData): WeatherData => ({
  ...data,
  main: {
    temp: formatKelvinToCelsius(data.main.temp),
    temp_max: formatKelvinToCelsius(data.main.temp_max),
    temp_min: formatKelvinToCelsius(data.main.temp_min),
    humidity: data.main.humidity,
  },
  date: format(new Date(), 'dd/MM/yyyy'),
});
export const capitalizeFirstLetter = (
  text: string,
): string => text.charAt(0).toUpperCase() + text.slice(1);
