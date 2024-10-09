import { useState, useContext, FormEvent, useEffect } from "react";
import { CityContext, ICity } from "@/contexts/CityProvider";
import styles from './CitiesSelect.module.css'

export default function CitiesSelect() {
  const cityContext = useContext(CityContext);
  const [citySelected, setCitySelected] = useState<string | undefined>();

  useEffect(() => {
    setCitySelected(cityContext?.currentCity?.city.name)
  }, [cityContext?.currentCity])

  function handleSelectOnChange(event: FormEvent<HTMLSelectElement>) {
    event.preventDefault();

    cityContext?.setCurrentCity(cityContext?.cities.find((city: ICity) => city.city.name === event.currentTarget.value));
 
    setCitySelected(event.currentTarget.value);
  }

  return (
    <div className={styles.citiesSelectContainer}>
      <label htmlFor="lang">Cidades pesquisadas recentemente</label>
      <select name="cities" id="cities" value={citySelected} onChange={handleSelectOnChange}>
        {
          cityContext?.cities.length !== 0 && cityContext?.cities.map((city: ICity, index) => (
            <option key={index} value={city.city.name}>{city.city.name}, {city.city.state}</option>
          ))
        }
      </select>
    </div>
  );
}