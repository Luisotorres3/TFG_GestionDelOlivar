// GoogleMaps.jsx
import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from './Map';
import { mapOptions } from './MapConfiguration';

const GoogleMaps = () => {
  // Lógica de integración con Google Maps
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapsApiKey,
    googleMapsApiKey: "YOUR_API_KEY"
  });
  return (
    <div>
      {/* Contenido del mapa aquí */}
      <Map isLoaded={isLoaded}/>
    </div>
  );
};

export default GoogleMaps;
