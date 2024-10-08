import styles from './CitiesSelect.module.css'

export default function CitiesSelect() {
  return (
    <div className={styles.citiesSelectContainer}>
      <label htmlFor="lang">Cidades pesquisadas recentemente</label>
      <select name="cities" id="cities">
        <option value="javascript">Belford Roxo, RJ</option>
      </select>
    </div>
  );
}