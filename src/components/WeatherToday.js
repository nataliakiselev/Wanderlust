import React, { useContext, useEffect, useState } from "react";

import ErrorSnackbar from "./ErrorSnackbar";
import WeatherDisplay from "./WeatherDisplay";
import { CityContext } from "../contexts/CityContext";

import getWeatherBackground from "../utils/getWeatherBackground";
// import { WEATHER_API_KEY } from "./../settings/keys";

function WeatherToday({ heading }) {
  const [city] = useContext(CityContext);
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    async function getWeather() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`;
      setErr(null);
      setPending(true);

      try {
        const response = await fetch(url);
        // console.log(response, "weather response");
        if (response.status >= 200 && response.status < 300) {
          const data = await response.json();
          // console.log("weather data", data);
          setValue(data);
        } else {
          throw response;
        }
      } catch (err) {
        console.log(err);

        setErr(err);
      }
      setPending(false);
    }
    getWeather();
  }, [city]);

  // console.log("city", city);
  // console.log("weather city", value && value.name);
  // console.log("full weather report", value);
  // console.log("error", err);

  let backgroundImage =
    "https://s19499.pcdn.co/wp-content/uploads/2018/09/blue-sky-with-bright-sun-picture-id947314334-1.jpg"; // default

  if (value) {
    let stationReport = value.weather[0];
    let generalWeatherDescriptor = stationReport.main.toLowerCase();
    backgroundImage = getWeatherBackground(generalWeatherDescriptor);
  }

  const styles = {
    background: `url(${backgroundImage}) center/cover`,
    padding: "15px",
    minHeight: "100%",
  };

  return (
    <div style={styles}>
      <h1>{heading}</h1>
      {pending && <p>Loading...</p>}
      {value && <WeatherDisplay data={value} />}
      {err && (
        <ErrorSnackbar
          errorMessage={err.message || `${city} ${err.statusText}`}
        />
      )}
    </div>
  );
}

export default WeatherToday;
