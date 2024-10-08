# React + Vite

# Weather Forecast Application

This is a weather forecast application built with React.js and Tailwind CSS, which displays the current weather and a 5-day forecast for a selected city. The application allows users to search for a city, switch between Celsius and Fahrenheit, and also includes local caching.

## Features:
- **Current Weather Display**: Displays city name, current temperature, weather conditions, and weather icons.
- **City Search**: Search for weather data for different cities using the OpenWeatherMap API.
- **5-Day Forecast**: Displays a 5-day weather forecast with high and low temperatures and icons.
- **Temperature Unit Conversion**: Switch between Celsius and Fahrenheit.
- **Pull-to-Refresh**: Refresh the weather and forecast data by pulling down on the page.
- **Caching**: The last searched city's weather data is cached for quick access on subsequent visits.

## Assumptions Made During Development:
   - The app uses the free tier of the OpenWeatherMap API, which may have rate limits.
   - The application is responsive and designed to work on mobile, tablet, and desktop screens using Tailwind CSS.
   - The default city shown is "New Delhi" if no other city has been searched or cached.
   - Caching is handled via localStorage, which stores the last searched city’s weather and forecast data.

## How to Use the Application:
   - Search for a City: Use the search bar to enter a city name and view its weather. 
   - Switch Temperature Units: Toggle between Celsius and Fahrenheit using the button.
   - Offline Use: The last searched city's data is cached and can be accessed offline or on subsequent visits.

## Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine using Git:
```bash
git clone https://github.com/lovrezchaudhary/Weather-App.git
cd weather-forecast-app

npm install -(To install all necessary dependencies)

npm run dev   -(To run the Project)


#   W e a t h e r - A p p 
 
 