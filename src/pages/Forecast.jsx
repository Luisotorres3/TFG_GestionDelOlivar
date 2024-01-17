import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Forecast.module.css';

const Forecast = ({  }) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [icon,setIcon]=useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=sp&appid=10febab50520dc67582eed976e016d80`

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
        setLocation('');
        setIcon(response.data.weather[0].icon);
      } catch (error) {
        console.error(error);
        setWeatherData(null);
        setError('Ciudad incorrecta. Verifica el nombre de la ciudad e inténtalo de nuevo.');
      }
    }
  };
  
  

  return (
    <div className={styles.forecastCont}>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Introduzca ciudad'
          type="text" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        

      </div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.location}>
            <p>{data.name}</p>
            {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="iconWeather" />}
          </div>
          <div className={styles.temp}>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className={styles.description}>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className={styles.bottom}>
            <div className={styles.feels}>
              {data.main ? <p className={styles.bold}>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className={styles.humidity}>
              {data.main ? <p className={styles.bold}>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className={styles.wind}>
              {data.wind ? <p className={styles.bold}>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}
export default Forecast;
