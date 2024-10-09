import { Weather } from "@/contexts/CityProvider";
import styles from './CityWeatherCard.module.css'

interface CityWeatherCardProps {
  weather: Weather;
}

export default function CityWeatherCard({ weather }: CityWeatherCardProps) {
  return (
    <div className={styles.cityWeatherCard}>
      <dl>
        <dt><span className={styles.weatherInformationItem}>Data: {weather.date}</span></dt>
        <br />
        <dt><span className={styles.weatherInformationItem}>Temperaturas</span></dt>
        <dd><span className={styles.weatherInformationItem}>Máxima:</span> {weather.temperature.max}</dd>
        <dd><span className={styles.weatherInformationItem}>Mínima:</span> {weather.temperature.min}</dd>
        <dt><span className={styles.weatherInformationItem}>Probabilidade de chuva:</span> {weather.rainProbability}</dt>
        <br />
        <dt className={styles.weatherInformationWithIcon}>
          <span className={styles.weatherInformationItem}>Clima:</span>
          <img
            className={styles.weatherInformationIcon}
            src={`https://assets.hgbrasil.com/weather/icons/conditions/${weather.condition}.svg`}
          />
          {weather.weather}
        </dt>
      </dl>
    </div>
  );
}
