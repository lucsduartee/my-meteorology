import { FormEvent, useState } from "react";

const BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";
const OPEN_WEATHER_API_KEY = "ec86d72c6e35f76377e32fda62b0247f";

export default function CitySearch() {
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch(
      `${BASE_URL}?q=${city}&appid=${OPEN_WEATHER_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  return (<form onSubmit={onSubmit}>
    <label htmlFor="city">Consulte a previsão do tempo em uma cidade</label>
    <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
    <button type="submit">Consultar</button>
  </form>
  );
}
