/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { fetchWeatherByCity, fetchFiveDayForecast } from './services/weatherService';
import WeatherCard from './components/WeatherCard';
import CitySearch from './components/CitySearch';
import ForecastCard from './components/ForecastCard';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const cachedCity = localStorage.getItem('city');
    const cachedWeatherData = localStorage.getItem('weatherData');
    const cachedForecastData = localStorage.getItem('forecastData');

    if (cachedCity && cachedWeatherData && cachedForecastData) {
      setWeatherData(JSON.parse(cachedWeatherData));
      setForecastData(JSON.parse(cachedForecastData));
    } else {
      fetchWeather('New Delhi');   // If cache data is not available, default city will be New Delhi.
    }
  }, []);

  const fetchWeather = async (city) => {
    try {
      const data = await fetchWeatherByCity(city);
      const forecast = await fetchFiveDayForecast(city);

      setWeatherData({
        city: data.name,
        temp: data.main.temp,
        condition: data.weather[0].description,
        icon: data.weather[0].icon,
      });

      // Filter the forecast to get only one entry per day (typically around noon)
      const filteredForecast = forecast.filter((entry) =>
        entry.dt_txt.includes('12:00:00')
      );

      const forecastData = filteredForecast.slice(0, 5).map((entry) => ({
        day: new Date(entry.dt_txt).toLocaleString('en-US', { weekday: 'long' }),
        tempMax: entry.main.temp_max,
        tempMin: entry.main.temp_min,
        icon: entry.weather[0].icon,
      }));

      setForecastData(forecastData);

      localStorage.setItem('city', city);
      localStorage.setItem('weatherData', JSON.stringify({
        city: data.name,
        temp: data.main.temp,
        condition: data.weather[0].description,
        icon: data.weather[0].icon,
      }));
      localStorage.setItem('forecastData', JSON.stringify(forecastData));

    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('City not found or network issue');
    }
  };

  const toggleTemperatureUnit = () => setIsCelsius(!isCelsius);

  const convertTemperature = (temp) => {
    return isCelsius ? temp : Math.round((temp * 9/5 + 32) * 100) / 100;  // Only two decimal places will be displayed
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-center p-4"
      style={{ backgroundImage: 'url(/WeatherBg.jpg)' }}
    >
      <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Weather Forecast</h1>
        <CitySearch onSearch={fetchWeather} />
        
        {weatherData && (
          <>
            <WeatherCard
              city={weatherData.city}
              temp={convertTemperature(weatherData.temp)}
              condition={weatherData.condition}
              icon={weatherData.icon}
              isCelsius={isCelsius}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
              {forecastData.map((forecast, index) => (
                <ForecastCard
                  key={index}
                  day={forecast.day}
                  tempMax={convertTemperature(forecast.tempMax)}
                  tempMin={convertTemperature(forecast.tempMin)}
                  icon={forecast.icon}
                  isCelsius={isCelsius} 
                />
              ))}
            </div>
          </>
        )}
        
        <button
          className="mt-4 px-6 py-3 bg-green-600 bg-opacity-60 text-white rounded-full shadow-lg hover:bg-green-500 backdrop-filter backdrop-blur-lg"
          onClick={toggleTemperatureUnit}
        >
          Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'} 
        </button> 
      </div>
    </div>
  );
};

export default App;
