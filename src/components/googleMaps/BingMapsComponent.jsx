import React, { useEffect, useRef, forwardRef } from 'react';
import 'ol/ol.css';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import Map from 'ol/Map';
import BingMaps from 'ol/source/BingMaps';

const BingMapsComponent = forwardRef((props, ref) => {
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
      }),
    });

    return () => {
      // Limpieza al desmontar el componente, si es necesario
      mapRef.current.setTarget(null);
    };
  }, []);

  // Pasa la referencia a través de props
  useEffect(() => {
    if (ref) {
      ref.current = mapRef.current;
    }
  }, [ref]);

  return <div ref={mapRef} id="map" style={{ width: '100%', height: '80vh' }}></div>;
});

export default BingMapsComponent;
