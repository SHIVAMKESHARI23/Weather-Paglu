import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import { useState, useEffect } from 'react';
import './Weather.css';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 21,
    temp: 25,
    humidity: 60,
    weather: "Clear Sky",
    tempMax: 30,
    tempMin: 20,
  });

  // Theme state
  const [theme, setTheme] = useState('normal');

  // Determine theme based on weather data
  const getThemeFromWeather = (info) => {
    const temp = info.temp;
    const humidity = info.humidity;
    const weatherDesc = info.weather.toLowerCase();

    // Rain condition: high humidity or description contains rain
    if (humidity > 80 || weatherDesc.includes('rain') || weatherDesc.includes('drizzle')) {
      return 'rain';
    }
    // Hot condition: temperature above 25°C
    if (temp > 25) {
      return 'hot';
    }
    // Cold condition: temperature below 15°C
    if (temp < 15) {
      return 'cold';
    }
    return 'normal';
  };

  // Update theme when weatherInfo changes
  useEffect(() => {
    const newTheme = getThemeFromWeather(weatherInfo);
    setTheme(newTheme);

    // Apply theme class to body
    document.body.className = ''; // remove previous
    document.body.classList.add(`theme-${newTheme}`);
  }, [weatherInfo]);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-container">
      <nav className="navbar">
        <h1>Weather-Paglu 🌤️</h1>
      </nav>

      <div className="content-wrapper">
        <SearchBox updateInfo={updateInfo} />
        <br />
        <InfoBox info={weatherInfo} />
      </div>

      <footer className="footer">
        <p>Made with ❤️ by <span>Shivam Keshari</span></p>
        <div className="social-handle">
          <a href="https://github.com/SHIVAMKESHARI23" target="_blank" rel="noreferrer">
            @shivamkeshari
          </a>
        </div>
      </footer>
    </div>
  );
}