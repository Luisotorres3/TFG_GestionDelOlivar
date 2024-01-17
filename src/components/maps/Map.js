import React from "react";
import { GoogleMap } from "@react-google-maps/api";
/*import { mapOptions } from "./MapConfiguration";*/
const Map = (props) =>{
    const {isLoaded} = props;
    const containerStyle = {
        width: '300px',
        height: '300px'
      };
      
      const center = {
        lat: 37.1775,
        lng: 3.5984
      };
    return isLoaded && (
        <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          
        </GoogleMap>
        </>
)};

export default Map;