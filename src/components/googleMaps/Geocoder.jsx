import React, { useEffect, useRef } from "react";
import Geocoder from "ol-geocoder";
import "ol-geocoder/dist/ol-geocoder.css";
import "../../styles/Geocoder.module.css";

const GeocoderComponent = ({ mapRef }) => {
  const geocoderRef = useRef();

  useEffect(() => {
    if (mapRef && mapRef.current) {
      // Configuración del geocoder
      const geocoder = new Geocoder("nominatim", {
        provider: "osm",
        lang: "es",
        placeholder: "Buscar dirección...",
        targetType: "text-input",
        autoComplete: true,
        keepOpen: true,
        target: "geocoderContainer",
      });

      // Asociar el mapa al geocoder
      geocoder.on("addresschosen", (event) => {
        const coord = event.coordinate;
        mapRef.current.getView().animate({ center: coord, zoom: 15 });
      });

      // Agregar el geocoder al mapa
      mapRef.current.addControl(geocoder);

      // Pasa la referencia del geocoder a través de props
      geocoderRef.current = geocoder;

      if (geocoderRef.current) {
        const geocoderElement = geocoderRef.current.element;
        if (geocoderElement) {
          geocoderElement.style.position = "static";
          geocoderElement.style.padding = "0 10px";
          const childDivs = geocoderElement.querySelectorAll("ul");
          // Iterar sobre los div hijos y aplicar estilos
          childDivs.forEach((div) => {
            // Aplicar estilos según las necesidades
            div.style.position = "static"; // Cambia a tu color preferido
            div.style.width = "auto";
            // Ajusta más estilos según sea necesario
          });
          // Ajusta más estilos según sea necesario
        }
      }

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
