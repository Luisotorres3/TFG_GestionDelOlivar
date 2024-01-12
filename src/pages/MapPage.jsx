// MapPage.jsx
import React, { useRef, useEffect } from "react";
import BingMapsComponent from "../components/googleMaps/BingMapsComponent";
import styles from "../styles/MapPage.module.css";
import GeocoderComponent from "../components/googleMaps/Geocoder";

const MapPage = () => {
  const mapRef = React.createRef();
  const map = mapRef.current;

  useEffect(() => {
    if (mapRef) {
      // Accede al mapa de Bing desde el ref
      

      // Ahora puedes hacer cualquier operación adicional en el mapa si es necesario
    }
  }, [mapRef]);
  return (
    <div>
      <h2>Mapa de Lindes</h2>
      <div className={styles.mainCont}>
        <BingMapsComponent ref={mapRef} />
        <div className={styles.buttonCont}>
          <GeocoderComponent map={mapRef.current} />
          <button>Crear Linde</button>
          <button>Borrar Linde</button>
          <button>Modificar Linde</button>
          <button>Ver datos Linde</button>
        </div>
      </div>

      {/* Otras partes de la página relacionadas con el mapa */}
    </div>
  );
};

export default MapPage;
