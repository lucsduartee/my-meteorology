import Head from "next/head";
import Link from 'next/link';

import GlobalProvider from "@/contexts/GlobalProvider";

import Header from "@/components/Header";
import MyMap from "@/components/MyMap/MyMap";
import WheatherInformation from "@/components/WeatherInformation/WeatherInformation";
import CityWeatherCarousel from "@/components/CityWeatherCarousel";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (<>
    <GlobalProvider>
      <Head>
        <title>My Meteorology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <section className={styles.wheatherInformation}>
            <WheatherInformation />
            <CityWeatherCarousel />
          </section>
          <MyMap />
        </main>
        <footer className={styles.footer}>
          <Link target="_blank" href="https://www.linkedin.com/in/dev-lucasduarte">
            Feito por @lucasduarte
          </Link>
        </footer>
      </div>
    </GlobalProvider>
  </>
  );
}
