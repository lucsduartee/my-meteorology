'use client';

import { FormEvent, useState, useContext, useEffect } from "react";
import { CityContext, ICity } from '@/contexts/CityProvider';

import styles from './CitySearch.module.css'

const OPEN_WEATHER_BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";
const OPEN_WEATHER_API_KEY = "ec86d72c6e35f76377e32fda62b0247f";
const HG_BRASIL_BASE_URL = "https://api.hgbrasil.com/weather";
const HG_BRASIL_API_KEY = "505c8bec";

export default function CitySearch() {
  const [cityName, setCityName] = useState('');
  const [hasError, setHasError] = useState(false);
  const context = useContext(CityContext);

  useEffect(() => {
    setTimeout(() => {
      setHasError(false);
    }, 1500);
  }, [hasError])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (context?.cities.find((city: ICity) => city.city.name === cityName)) {
      context.setCurrentCity(context?.cities.find((city: ICity) => city.city.name === cityName));
      setCityName('');
      return;
    }

    try {
      const openWeatherResponse = await fetch(`${OPEN_WEATHER_BASE_URL}?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`);

      const openWeatherData = await openWeatherResponse.json();

      if (openWeatherData.length === 0) {
        alert('Cidade não encontrada!');
        return;
      };

      const city = openWeatherData[0];
      const { lat, lon } = city;

      const hgBrasilResponse = await fetch(`${HG_BRASIL_BASE_URL}?format=json-cors&key=${HG_BRASIL_API_KEY}&lat=${lat}&lon=${lon}`);
      const { results: weather } = await hgBrasilResponse.json();

      const [, d1, d2, d3] = weather.forecast;

      context?.setCurrentCity(
        {
          city: {
            lat: city.lat,
            lon: city.lon,
            name: city.name,
            state: city.state,
          },
          currentWeather: {
            city: city.name,
            date: weather.date,
            weather: weather.description,
            temperature: {
              min: weather.forecast[0].min,
              max: weather.forecast[0].max,
              current: weather.temp,
            },
            condition: weather.condition_slug,
            moonPhase: weather.moon_phase,
            rainProbability: weather.forecast[0].rain_probability,
          },
          nextWeathers: [{
            date: d1.date,
            weather: d1.description,
            condition: d1.condition,
            temperature: {
              min: d1.min,
              max: d1.max,
            },
            rainProbability: d1.rain_probability,
          }, {
            date: d2.date,
            weather: d2.description,
            condition: d2.condition,
            temperature: {
              min: d2.min,
              max: d2.max,
            },
            rainProbability: d2.rain_probability,
          }, {
            date: d3.date,
            weather: d3.description,
            condition: d3.condition,
            temperature: {
              min: d3.min,
              max: d3.max,
            },
            rainProbability: d3.rain_probability,
          }],
        }
      );

      context?.setCities((prevState: ICity[]) => [
        ...prevState,
        {
          city: {
            lat: city.lat,
            lon: city.lon,
            name: city.name,
            state: city.state,
          },
          currentWeather: {
            city: city.name,
            date: weather.date,
            weather: weather.description,
            temperature: {
              min: weather.forecast[0].min,
              max: weather.forecast[0].max,
              current: weather.temp,
            },
            condition: weather.condition_slug,
            moonPhase: weather.moon_phase,
            rainProbability: weather.forecast[0].rain_probability,
          },
          nextWeathers: [{
            date: d1.date,
            weather: d1.description,
            condition: d1.condition,
            temperature: {
              min: d1.min,
              max: d1.max,
            },
            rainProbability: d1.rain_probability,
          }, {
            date: d2.date,
            weather: d2.description,
            condition: d2.condition,
            temperature: {
              min: d2.min,
              max: d2.max,
            },
            rainProbability: d2.rain_probability,
          }, {
            date: d3.date,
            weather: d3.description,
            condition: d3.condition,
            temperature: {
              min: d3.min,
              max: d3.max,
            },
            rainProbability: d3.rain_probability,
          }],
        }
      ]);

      setCityName('');

      /* eslint-disable  @typescript-eslint/no-unused-vars */
    } catch (e) {
      setHasError(true);
    }
  }

  return (<form className={styles.searchInputContainer} onSubmit={onSubmit}>
    <label className={styles.searchInputLabel} htmlFor="city">Consulte a previsão do tempo em uma cidade</label>
    <input data-testid="cypress-search-input" className={styles.searchInput} type="text" id="city" value={cityName} onChange={(e) => setCityName(e.target.value)} />
    <button data-testid="cypress-search-button" className={styles.searchInputButton} type="submit" disabled={hasError}>Consultar</button>
    {
      hasError && (
        <div data-testid="cypress-error-message" className={styles.searchInputSearchError}>
          Ocorreu um erro
        </div>
      )
    }
  </form>
  );
}
