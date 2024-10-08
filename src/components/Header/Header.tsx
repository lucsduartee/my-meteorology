import CitySearch from "@/components/CitySearch";
import CitiesSelect from "@/components/CitiesSelect/CitiesSelect";

export default function Header() {
  return (
    <header>
      <span>My Meteorology</span>
      <CitySearch />
      <CitiesSelect />     
    </header>
  );
}