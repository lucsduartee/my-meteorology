import { FormEvent, useState, useContext } from "react";
import { CityContext } from '@/contexts/CityProvider';

const OPEN_WEATHER_BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";
const OPEN_WEATHER_API_KEY = "ec86d72c6e35f76377e32fda62b0247f";
const HG_BRASIL_BASE_URL = "https://api.hgbrasil.com/weather";
const HG_BRASIL_API_KEY = "505c8bec";

export default function CitySearch() {
  const [cityName, setCityName] = useState('');
  const cityContext = useContext(CityContext);
  console.log('cityContext', cityContext);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const openWeatherResponse = await fetch(`${OPEN_WEATHER_BASE_URL}?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`);
    const [city]  = await openWeatherResponse.json();
    const { lat, lon } = city;

    const hgBrasilResponse = await fetch(`${HG_BRASIL_BASE_URL}?format=json-cors&key=${HG_BRASIL_API_KEY}&lat=${lat}&lon=${lon}`);
    const data = await hgBrasilResponse.json();
    console.log('hgBrasilResponse', data);
  }
  return (<form onSubmit={onSubmit}>
    <label htmlFor="city">Consulte a previsão do tempo em uma cidade</label>
    <input type="text" id="city" value={cityName} onChange={(e) => setCityName(e.target.value)} />
    <button type="submit">Consultar</button>
  </form>
  );
}
