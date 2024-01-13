import React, { useEffect, useRef } from 'react';
import Geocoder from 'ol-geocoder';

const GeocoderComponent = ({ mapRef }) => {
  const geocoderRef = useRef();

  useEffect(() => {
    if (mapRef && mapRef.current) {
      // Configuración del geocoder
      const geocoder = new Geocoder('nominatim', {
        provider: 'osm',
        lang: 'es',
        placeholder: 'Buscar dirección...',
        targetType: 'text-input',
        autoComplete: true,
        keepOpen: true,
        target: 'geocoderContainer',
      });

      // Asociar el mapa al geocoder
      geocoder.on('addresschosen', (event) => {
        const coord = event.coordinate;
        mapRef.current.getView().animate({ center: coord, zoom: 15 });
      });

      // Agregar el geocoder al mapa
      mapRef.current.addControl(geocoder);

      // Pasa la referencia del geocoder a través de props
      geocoderRef.current = geocoder;

      return () => {
        // Limpieza al desmontar el componente, si es necesario
        if (mapRef.current && geocoderRef.current) {
          mapRef.current.removeControl(geocoderRef.current);
        }
      };
    }
  }, [mapRef]);

  return null; // No necesitas un elemento HTML para el geocoder
};

export default GeocoderComponent;
