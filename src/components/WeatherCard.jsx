/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const WeatherCard = ({ city, temp, condition, icon, isCelsius }) => {
  return (
    <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm  shadow-none rounded-2xl p-6 text-center w-80">
      <h2 className="text-3xl font-semibold text-white">{city}</h2>
      <img
        className="mx-auto "
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt="Weather icon"
      />
      <p className="text-3xl font-bold text-white">
        {temp}{isCelsius ? '°C' : '°F'}
      </p>
      <p className="text-lg text-white">{condition}</p>
    </div>
  );
};

WeatherCard.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isCelsius: PropTypes.bool.isRequired,  
};

export default WeatherCard;
