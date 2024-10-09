import { useEffect, useContext } from "react";
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from "ol/proj";

import { CityContext } from "@/contexts/CityProvider";

import styles from './MyMap.module.css'

/** 
 * This components renders Map from OpenLayers
*/
function MyMap() {
  const cityContext = useContext(CityContext);

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
