import CitySearch from "@/components/CitySearch";
import CitiesSelect from "@/components/CitiesSelect/CitiesSelect";
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.headerTitle}>My Meteorology</span>
      <CitySearch />
      <CitiesSelect />     
    </header>
  );
}