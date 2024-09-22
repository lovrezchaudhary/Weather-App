import axios from 'axios';

const API_KEY = '7e5d2dad497e2e1e7d54d97f6e4694ab'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Fetch weather data by city
export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('City not found or network issue');
  }
};

// Fetch 5-day forecast for a city
export const fetchFiveDayForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data.list;  // This will Only return the forecast list
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw new Error('Error fetching forecast');
  }
};
