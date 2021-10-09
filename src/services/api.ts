import axios from 'axios';

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: 'd15f04b81dd8d82de872d8630570ac3c',
    lang: 'pt_br',
  },
});

export const shazamApi = axios.create({
  baseURL: 'https://shazam.p.rapidapi.com/search',
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': '984c55c8f2mshec8ad44a702ac38p121c00jsnde821eadfed9',
  },
});
