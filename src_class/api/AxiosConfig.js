// import { endpoint, countryName, API_KEY, BASE_URL } from "./APIconfig";

// export const getNewsAPI = (category) => {
//   return `${BASE_URL}?country=${countryName}&category=${category}&apiKey=${API_KEY}`;
// };

import axios from 'axios';

export default axios.create({
  baseURL: 'https://newsapi.org/v2/',
});

// export const getSourceAPI = (source) => {
//   return `${BASE_URL}/everything/${source}.json`;
// };
