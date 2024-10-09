import { useContext } from "react";
import CityWeatherCard from "@/components/CityWeatherCard";
import { CityContext, Weather } from "@/contexts/CityProvider";

import styles from './CityWeatherCarousel.module.css';

export default function CityWeatherCarousel() {
  const cityContext = useContext(CityContext);

  return (
    <section className={styles.container}>
      <div className={styles.cityWeatherCarousel}>
        {
          cityContext?.currentCity?.nextWeathers.map((weather: Weather, index) => (
            <CityWeatherCard key={index} weather={weather} />
          ))
        }
      </div>
    </section>
  )
}