import { useContext} from "react";
import { CityContext } from "@/contexts/CityProvider";

export default function WheatherInformation() {
  const cityContext = useContext(CityContext);
  const currentCity = cityContext?.currentCity;

  return (<>
    {
      currentCity && (
        <section>
          <h1>Informações do clima</h1>

          <dl>
            <dt>Cidade: {currentCity.city.name}</dt>
            <dt>Data: {currentCity.currentWeather.date}</dt>
            <dt>Clima: {currentCity.currentWeather.weather}</dt>
            <dt>Temperaturas: </dt>
            <dd>Atual: {currentCity.currentWeather.temperature.current}</dd>
            <dd>Máxima: {currentCity.currentWeather.temperature.max}</dd>
            <dd>Mínima: {currentCity.currentWeather.temperature.min}</dd>
            <dt>Fase da lua: {currentCity.currentWeather.moonPhase}</dt>
            <dt>Probabilidade de chuva: {currentCity.currentWeather.rainProbability}</dt>
          </dl>
        </section>
      )
    }
  </>
  );
}