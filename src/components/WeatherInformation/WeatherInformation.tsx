import { useContext } from "react";
import { CityContext } from "@/contexts/CityProvider";
import styles from './WeatherInformation.module.css'

export default function WheatherInformation() {
  const cityContext = useContext(CityContext);
  const currentCity = cityContext?.currentCity;

  return (<>
    {
      currentCity && (
        <section className={styles.weatherInformationCard}>
          <h1 className={styles.weatherInformationTitle}>Informações do clima</h1>

          <dl>
            <dt data-testid="cypress-city-name"><span className={styles.weatherInformationItem}>Cidade:</span> {currentCity.city.name}</dt>
            <dt><span className={styles.weatherInformationItem}>Data:</span> {currentCity.currentWeather.date}</dt>
            <br />
            <dt><span className={styles.weatherInformationItem}>Temperaturas</span> </dt>
            <dd><span className={styles.weatherInformationItem}>Atual:</span> {currentCity.currentWeather.temperature.current}</dd>
            <dd><span className={styles.weatherInformationItem}>Máxima:</span> {currentCity.currentWeather.temperature.max}</dd>
            <dd><span className={styles.weatherInformationItem}>Mínima:</span> {currentCity.currentWeather.temperature.min}</dd>
            <dt><span className={styles.weatherInformationItem}>Probabilidade de chuva:</span> {currentCity.currentWeather.rainProbability}</dt>
            <br />
            <dt className={styles.weatherInformationWithIcon}>
              <span className={styles.weatherInformationItem}>Fase da lua:</span>
              <img
                className={styles.weatherInformationIcon}
                src={`https://assets.hgbrasil.com/weather/icons/moon/${currentCity.currentWeather.moonPhase}.png`}
              />
            </dt>
            <dt className={styles.weatherInformationWithIcon}>
              <span className={styles.weatherInformationItem}>Clima:</span>
              <img
                className={styles.weatherInformationIcon}
                src={`https://assets.hgbrasil.com/weather/icons/conditions/${currentCity.currentWeather.condition}.svg`}
              />
              {currentCity.currentWeather.weather}
            </dt>
          </dl>
        </section>
      )
    }
  </>
  );
}