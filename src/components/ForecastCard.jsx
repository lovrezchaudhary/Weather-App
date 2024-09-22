/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const ForecastCard = ({ day, tempMax, tempMin, icon, isCelsius }) => {
  // Function to convert Celsius to Fahrenheit if isCelsius is false
  const convertTemperature = (temp) => isCelsius ? temp : Math.round((temp * 9/5 + 32) * 100) / 100;

  return (
    <div className="bg-white bg-opacity-20 shadow-lg rounded-lg p-4 text-center">
      <h4 className="font-semibold text-white">{day}</h4>
      <img
        className="mx-auto"
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt="Weather icon"
      />
      <p className="text-lg font-bold text-white">
        {convertTemperature(tempMax)}{isCelsius ? '°C' : '°F'} / {convertTemperature(tempMin)}{isCelsius ? '°C' : '°F'}
      </p>
    </div>
  );
};

ForecastCard.propTypes = {
  day: PropTypes.string.isRequired,
  tempMax: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  isCelsius: PropTypes.bool.isRequired,
};

export default ForecastCard;
