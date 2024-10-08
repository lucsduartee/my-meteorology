import { FormEvent, useState } from "react";
// import { CityContext } from '@/contexts/CityProvider';

const OPEN_WEATHER_BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";
const OPEN_WEATHER_API_KEY = "ec86d72c6e35f76377e32fda62b0247f";
// const HG_BRASIL_BASE_URL = "https://api.hgbrasil.com/weather";
// const HG_BRASIL_API_KEY = 
// https://api.hgbrasil.com/weather?key=SUA-CHAVE&lat=-23.682&lon=-46.875&user_ip=remote
export default function CitySearch() {
  const [cityName, setCityName] = useState('');
  // const cityContext = useContext(CityContext);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const openWeatherResponse = await fetch(`${OPEN_WEATHER_BASE_URL}?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`);
    // const [city]  = await openWeatherResponse.json();
    // const { lat, lon } = city;

    // const res = await fetch(`${BASE_URL}?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`); 
  }
  return (<form onSubmit={onSubmit}>
    <label htmlFor="city">Consulte a previsão do tempo em uma cidade</label>
    <input type="text" id="city" value={cityName} onChange={(e) => setCityName(e.target.value)} />
    <button type="submit">Consultar</button>
  </form>
  );
}
