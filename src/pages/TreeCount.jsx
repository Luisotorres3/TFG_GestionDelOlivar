import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/TreeCount.module.css";
import BingMapsComponent from "../components/maps/BingMapsComponent";
import GeocoderComponent from "../components/maps/Geocoder";
import html2canvas from "html2canvas";
import MapCaptureButton from "./MapCaptureButton";

export default function TreeCount() {
  const mapRef = useRef();
  const [mapReady, setMapReady] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    setMapReady(true);
  }, []);

  const handleCapture = (imgData) => {
    setCapturedImage(imgData);
  };

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
          <div className={styles.textCont} id="geocoderContainer" >
            <div className={styles.tableCont}>
              <table border="1">
                <thead>
                  <tr>
                    <th>Nº Hileras</th>
                    <th>Nº Árboles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fila 1, Celda 1</td>
                    <td>Fila 1, Celda 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <MapCaptureButton
                map={mapRef}
                bingMapRef={mapRef}
                onCapture={handleCapture}
              />
            </div>
          </div>
          <div className={styles.mapCont}>
            {capturedImage && (
              <img src={capturedImage} alt="Captured" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
