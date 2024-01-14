import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/TreeCount.module.css";
import BingMapsComponent from "../components/googleMaps/BingMapsComponent";
import GeocoderComponent from "../components/googleMaps/Geocoder";
export default function TreeCount() {
  const mapRef = useRef();
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);
  return (
    <>
      <div className={styles.treeCont}>
        Conteo De Olivos
        <div className={styles.imgCont}>
          <div className={styles.mapCont}>
            <BingMapsComponent ref={mapRef} width="100%" height="100%" />
            {mapReady && mapRef.current && (
              <GeocoderComponent mapRef={mapRef} target="" />
            )}
          </div>
          <div className={styles.textCont} >
            <div id="geocoderContainer">
              <table border="1">
                <thead>
                  <tr>
                    <th>Número de hileras</th>
                    <th>Número de olivos</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Fila 1, Celda 1</td>
                    <td>Fila 1, Celda 2</td>
                  </tr>
                  <tr>
                    <td>Fila 2, Celda 1</td>
                    <td>Fila 2, Celda 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
            <button>PROCESAR IMAGEN</button>
            </div>
            
          </div>
          <img src={require("../images/img2.png")} alt="img2" />
        </div>
      </div>
    </>
  );
}
