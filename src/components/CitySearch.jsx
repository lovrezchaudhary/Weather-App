/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form className="flex items-center space-x-4 justify-center mb-8" onSubmit={handleSearch}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="w-64 px-4 py-2 bg-white bg-opacity-10 text-white border border-transparent rounded-full shadow-lg backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-700 bg-opacity-80 text-white rounded-full shadow-lg hover:bg-blue-700 backdrop-filter backdrop-blur-none"
      >
        Search
      </button>
    </form>
  );
};

CitySearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default CitySearch;
