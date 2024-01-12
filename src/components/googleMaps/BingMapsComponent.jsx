import React, { useEffect, useRef, forwardRef } from 'react';
import 'ol/ol.css';
import 'ol-geocoder/dist/ol-geocoder.min.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps';
import Geocoder from 'ol-geocoder';

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

    // Configuración del geocoder
    const geocoder = new Geocoder('nominatim', {
      provider: 'osm',
      lang: 'es',
      placeholder: 'Buscar dirección...',
      targetType: 'text-input',
      autoComplete: true,
      keepOpen: true,
    });

    // Asociar el mapa al geocoder
    geocoder.on('addresschosen', (event) => {
      const coord = event.coordinate;
      mapRef.current.getView().animate({ center: coord, zoom: 15 });
    });

    // Agregar el geocoder al mapa
    mapRef.current.addControl(geocoder);

    return () => {
      // Limpieza al desmontar el componente, si es necesario
      mapRef.current.setTarget(null);
      mapRef.current.removeControl(geocoder);
    };
  }, []);

  // Pasa la referencia a través de props
  useEffect(() => {
    if (ref) {
      ref.current = mapRef.current;
    }
  }, [ref]);

  return <div id="map" style={{ width: '100%', height: '80vh' }}></div>;
});

export default BingMapsComponent;
