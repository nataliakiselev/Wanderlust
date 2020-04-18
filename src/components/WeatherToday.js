import React, { useState, useContext , useEffect, useCallback } from 'react';
import ErrorSnackbar from './ErrorSnackbar';
import WeatherDisplay from './WeatherDisplay';
import { Snackbar } from '@material-ui/core';
import {CityContext} from '../CityContext';
import ErrorBoundary from './ErrorBoundary';

// const hour = 60 * 60 * 1000;
function WeatherToday (){
  const [data, setData]=useState(null);
  const[city, setCity]= useContext(CityContext);
// const refreshRate = hour;


 const getWeather = useCallback( async () =>{
    console.log('getWeather called');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=6e2578a179c86b9100b4290b1813578c`
      );
      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        console.log('city', city)
        console.log('weather data', data);
      setData(data);
      } else {
        throw response;
      }
      console.log(response);
    } catch (err) {
      console.dir(err);
    // setState({
    //     error: err,
    //   });
    let {message} = err;
        if (err instanceof Response) {
         message= err.message || err.statusText;
         
        } else {
         message = "An error has occured";
  }
  }
 },[city])

  useEffect(() => {
    const city = window.localStorage.getItem('city');
    if (city) {
     setCity(city);
     console.log(city)
    } else {
    //  city ='london'
      getWeather();
    }
  }
  )


//   useEffect(( prevCity) =>{
//     const { city: currentCity } = {city};
//      if (currentCity && currentCity !== prevCity) {
//       getWeather();
//      window.localStorage.setItem('city', currentCity);
//   }
// }, [city, getWeather])


 
    let backgroundImage = '';
    if (data) {
      console.log(data);

      const report = data.weather[0];
      // console.log('report', report);
      switch (report.main.toLowerCase()) {
        case 'rain':
          backgroundImage =
            'https://cdn.abcotvs.com/dip/images/5184599_031119-kgo-shutterstock-rain-img.jpg?w=1600';
          break;
        case 'clouds':
          backgroundImage =
            'https://www.almanac.com/sites/default/files/image_nodes/cloudy-sky.jpg';
          break;
        case 'snow':
          backgroundImage =
            'https://il5.picdn.net/shutterstock/videos/3215686/thumb/1.jpg';
          break;
        case 'clear':
          backgroundImage =
            'https://s19499.pcdn.co/wp-content/uploads/2018/09/blue-sky-with-bright-sun-picture-id947314334-1.jpg';
          break;
        case 'drizzle':
          backgroundImage =
            'https://cdn.abcotvs.com/dip/images/5184599_031119-kgo-shutterstock-rain-img.jpg?w=1600';
          break;
        case 'thunderstorm':
          backgroundImage =
            'http://i.ytimg.com/vi/el93AooFrgg/maxresdefault.jpg';
          break;
        case 'mist':
          backgroundImage =
            'http://3.bp.blogspot.com/-PsBYNl5ltF0/TeeF2HLv_QI/AAAAAAAAAKA/IVrqRAdx_TQ/s1600/Morning+mist%252C+Waitomo%252C+New+Zealand+Pictures.jpg';
          break;
        default:
          backgroundImage =
            'https://s19499.pcdn.co/wp-content/uploads/2018/09/blue-sky-with-bright-sun-picture-id947314334-1.jpg';
      }
    } else {
      backgroundImage =
        'https://s19499.pcdn.co/wp-content/uploads/2018/09/blue-sky-with-bright-sun-picture-id947314334-1.jpg';
    }

    const styles = {
      background: `url(${backgroundImage}) center/cover`,
      padding: '15px',
    };

    console.log('this.data', data);
    return (
      <div id="thing" style={styles}>
        <h1>heading</h1>
<ErrorBoundary>
        <WeatherDisplay data={data} />
        </ErrorBoundary>
        {/* <Snackbar /> */}
      </div>
    );
  
    }


export default WeatherToday;
