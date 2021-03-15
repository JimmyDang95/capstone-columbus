import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { useState } from 'react'

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat: 53.136719,
    lng: 8.216540,
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

export default function Map() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const [markers, setMarkers] = useState([]);

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <>
            {/*Zoomlevels:
            1: World
            5: Landmass/continent
            10: City
            15: Streets
            20: Buildings*/}
            <GoogleMap mapContainerStyle={mapContainerStyle}
                       zoom={15}
                       center={center}
                       options={options}
                       onClick={(event) => {
                           setMarkers(current => [...current,
                               {
                                   lat: event.latLng.lat(),
                                   lng: event.latLng.lng(),
                                   time: new Date(),
                               },
                           ]);
                       }}
                           >
                {markers.map(marker => <Marker key={marker.time.toISOString()} position={{lat: marker.lat, lng: marker.lng}}/>)}
            </GoogleMap>
        </>

    );
}