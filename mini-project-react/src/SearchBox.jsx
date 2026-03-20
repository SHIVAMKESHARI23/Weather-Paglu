import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error("No such Place Exist");
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      console.log("Error:", err.message);
      throw err;
    }
  };

  let handleChange = (evn) => {
    setCity(evn.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch {
      alert("No such place exists! Try again.");
      setCity("");
    }
  };

  return (
    <div className="Searchbox glass-panel">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter City Name"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
          color="primary"
        />
        <Button
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
        >
          Search Weather
        </Button>
      </form>
    </div>
  );
}