import Head from "next/head";
import styles from "@/styles/Home.module.css";
import MyMap from "@/components/MyMap/MyMap";
import WheatherInformation from "@/components/WeatherInformation/WeatherInformation";
import CitiesSelect from "@/components/CitiesSelect/CitiesSelect";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Meteorology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <main className={styles.main}>
          <MyMap />

          <div className={styles.wheatherInformation}>
            <WheatherInformation />

            <CitiesSelect />
          </div>

        </main>
        <footer className={styles.footer}>
          Feito por @lucsduarte
        </footer>
      </div>
    </>
  );
}
