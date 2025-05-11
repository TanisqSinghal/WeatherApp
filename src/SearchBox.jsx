import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "49a01e2524127f2d6bd278de8f697e22";

  useEffect(() => {
    if (err) {
      setCity("");
    }
  }, [err]);

  let getWeatherData = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (city === "") {
        alert("Please enter a city name");
      } else {
        // console.log(city);
        let result = await getWeatherData();
        updateInfo(result);
        setCity("");
      }
    } catch (err) {
      setErr(true);
      // console.log(err);
      alert("Please enter a valid city name");
    }
  };

  return (
    <div className="SearchBox">
      <p>* Indicates required</p>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          required
          id="city"
          label="City Name"
          value={city}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          className="searchButton"
        >
          Search
        </Button>

        {err && <p style={{ color: "red" }}>Please enter a valid city name</p>}
      </form>
    </div>
  );
}
