import { useEffect, useContext } from "react";
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from "ol/proj";

import { CityContext } from "@/contexts/CityProvider";

import styles from './MyMap.module.css'

function MyMap() {
  const cityContext = useContext(CityContext);

  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],

      // Verifica se existe uma cidade no estado e caso haja, renderiza o mapa centralizando a cidade
      // por meio da conversão das coordenadas geograficas de lat e lon para o formato da pojeção padrão
      // do OpenLayers
      view: new View({
        center: cityContext?.currentCity
        ? fromLonLat([cityContext?.currentCity.city.lon, cityContext?.currentCity.city.lat])
        : fromLonLat([-51.9253, -14.2350]),
        zoom: cityContext?.currentCity ? 10 : 4,
      }),
    });

    return () => {
      map.setTarget(null as any);
    };
  }, [cityContext?.currentCity]);

  return <div id="map" style={{ width: "100%", height: "850px" }} className={styles.map} />;
}

export default MyMap;
