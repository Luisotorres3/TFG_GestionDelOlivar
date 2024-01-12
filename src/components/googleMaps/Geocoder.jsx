// GeocoderComponent.js
import React, { useEffect } from 'react';
import Geocoder from 'ol-geocoder';
import 'ol/ol.css'; // Asegúrate de importar los estilos de OpenLayers

const GeocoderComponent = ({ map }) => {
  useEffect(() => {
    if (!map) {
      return;
    }

    const geocoder = new Geocoder('nominatim', {
      collapsed: false, // Asegúrate de que no esté colapsado
      placeholder: 'Buscar dirección...',
      targetType: 'text-input',
      lang: 'es-ES',
      limit: 5,
      keepOpen: true,
    });

    // Añadir el geocoder al mapa
    map.addControl(geocoder);

    // Mover el geocoder a la parte superior derecha
    const geocoderElement = geocoder.element;
    geocoderElement.style.position = 'absolute';
    geocoderElement.style.top = '10px';
    geocoderElement.style.right = '10px';

    // Limpieza al desmontar el componente, si es necesario
    return () => {
      map.removeControl(geocoder);
    };
  }, [map]);

  return null;
};

export default GeocoderComponent;
