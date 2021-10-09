import axios from 'axios';
import 'dotenv';

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: process.env.REACT_APP_ID as string,
    lang: 'pt_br',
  },
});

export const shazamApi = axios.create({
  baseURL: 'https://shazam.p.rapidapi.com/search',
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_SHAZAM_KEY as string,
  },
});
