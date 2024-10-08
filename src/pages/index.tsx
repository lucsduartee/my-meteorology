import Head from "next/head";

import GlobalProvider from "@/contexts/GlobalProvider";

import MyMap from "@/components/MyMap/MyMap";
import WheatherInformation from "@/components/WeatherInformation/WeatherInformation";
import Header from "@/components/Header";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (<>
    <GlobalProvider>
      <Head>
        <title>My Meteorology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <div>
        <Header />
        <main className={styles.main}>
          <MyMap />

          <WheatherInformation />
        </main>
        <footer className={styles.footer}>
          Feito por @lucsduarte
        </footer>
      </div>
    </GlobalProvider>
  </>
  );
}
