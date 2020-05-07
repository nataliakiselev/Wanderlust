import React, { useContext /* useEffect , useState */ } from "react";
import ErrorSnackbar from "./ErrorSnackbar";
import WeatherDisplay from "./WeatherDisplay";
import { CityContext } from "../contexts/CityContext";
import useFetch from "../hooks/useFetch";
import getWeatherBackground from "../utils/getWeatherBackground";
import { WEATHER_API_KEY } from "./../settings/keys";

function WeatherToday({ heading }) {
  const [city] = useContext(CityContext);
  // const [lastGoodData, setLastGoodData] = useState(null);
  const {
    // execute: callAPI,
    pending,
    value: weatherReport,
    error: err,
  } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`,
    false
  );

  console.log("city", city);
  console.log("weather city", weatherReport && weatherReport.name);
  console.log("full weather report", weatherReport);
  console.log("error", err);

  // useEffect(() => {
  //   // debugger;
  //   if (pending) {
  //     console.log("Call already in progress: Bailing...");
  //     return;
  //   }
  //   const normalisedWeatherReportName =
  //     weatherReport && weatherReport.name.toLowerCase();
  //   const citiesAreMatching = normalisedWeatherReportName === city;
  //   const thisCallErrored = err && err.url.includes(`q=${city}`);
  //   console.log(
  //     `Report present already: ${!!weatherReport};
  //     Name in report does not match city: ${!citiesAreMatching}
  //     This call is errored: ${thisCallErrored}`
  //   );
  //   if ((!weatherReport || !citiesAreMatching) && !thisCallErrored) {
  //     console.log("Going to call");
  //     callAPI();
  //   } else {
  //     console.log("Did not call");
  //   }
  // }, [callAPI, city, weatherReport, pending, err]);

  let backgroundImage =
    "https://s19499.pcdn.co/wp-content/uploads/2018/09/blue-sky-with-bright-sun-picture-id947314334-1.jpg"; // default

  if (weatherReport) {
    let stationReport = weatherReport.weather[0];
    let generalWeatherDescriptor = stationReport.main.toLowerCase();
    backgroundImage = getWeatherBackground(generalWeatherDescriptor);
  }

  const styles = {
    background: `url(${backgroundImage}) center/cover`,
    padding: "15px",
    minHeight: "500px",
  };

  return (
    <div style={styles}>
      <h1>{heading}</h1>
      {pending && <p>Loading...</p>}
      {weatherReport && <WeatherDisplay data={weatherReport} />}
      {err && (
        <ErrorSnackbar
          errorMessage={err.message || `${city} ${err.statusText}`}
        />
      )}
    </div>
  );
}

export default WeatherToday;
