import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "London",
    temp: 20,
    tempMin: 15,
    tempMax: 25,
    humidity: 60,
    feelsLike: 18,
    weather: "Sunny",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <>
      <h1
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "rgb(74, 180, 246)",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Weather App by Tanishak
      </h1>
      <div style={{ textAlign: "center" }}>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </>
  );
}
