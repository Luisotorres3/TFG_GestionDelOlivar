// MapPage.jsx
import React, { useRef, useEffect,useState  } from "react";
import BingMapsComponent from "../components/googleMaps/BingMapsComponent";
import styles from "../styles/MapPage.module.css";
import GeocoderComponent from "../components/googleMaps/Geocoder";

const MapPage = () => {
  const mapRef = useRef();
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);
  
  return (
    <div>
      <h2>Mapa de Lindes</h2>
      <div className={styles.mainCont}>
        <BingMapsComponent ref={mapRef} />
        <div className={styles.buttonCont}>
          {mapReady && mapRef.current && <GeocoderComponent mapRef={mapRef} />}
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
