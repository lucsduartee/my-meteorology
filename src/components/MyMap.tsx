import { useEffect } from "react";
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

import styles from '@/styles/MyMap.module.css'

function MyMap() {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [-6900000, -500000],
        zoom: 4,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, []);
  return <div id="map" style={{ width: "100%", height: "800px" }} className={styles.map}/>;
}

export default MyMap;
