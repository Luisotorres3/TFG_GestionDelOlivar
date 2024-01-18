import React, { useEffect, useRef, forwardRef } from 'react';
import 'ol/ol.css';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import Map from 'ol/Map';
import BingMaps from 'ol/source/BingMaps';
import styles from '../../styles/BingMaps.module.css';

const BingMapsComponent = forwardRef((props, ref) => {
  const { width, height } = props;
  const mapRef = useRef();

  useEffect(() => {
    // Configuración del mapa de Bing Maps
    mapRef.current = new Map({
      target: 'map', // Asegúrate de que exista un elemento con id="map"
      layers: [
        new TileLayer({
          source: new BingMaps({
            key: 'AjTZltKJNAFnrogNQ6CU-n90SLSLW0Y_HYbHotW3_awnrsAa5VmGJhdICmiaJNmf',
            imagerySet: 'Aerial',
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
        maxZoom: 19,
      }),
    });

    return () => {
      // Limpieza al desmontar el componente
      if (mapRef.current) {
        mapRef.current.setTarget(null);
      }
    };
  }, []);

  // Pasa la referencia a través de props
  useEffect(() => {
    if (ref) {
      ref.current = mapRef.current;
    }
  }, [ref]);

  return <div ref={mapRef} id="map" style={{ width: width, height: height, marginLeft:'30px' }} className={styles.mapCont }></div>;
});

export default BingMapsComponent;
