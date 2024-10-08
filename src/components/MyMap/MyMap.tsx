import { useEffect } from "react";
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

import styles from './MyMap.module.css'

/** 
 * This components renders Map from OpenLayers
*/
function MyMap() {

  /** 
  * Initialize map with Brazil as the center
  * @returns Cleans map on component unmount
  */
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
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
      map.setTarget(null as any);
    };
  }, []);
  return <div id="map" style={{ width: "100%", height: "800px" }} className={styles.map} />;
}

export default MyMap;
