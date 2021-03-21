import React, {useRef} from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import {useState, useCallback} from 'react'
import LocateCurrentLocation from "../googleMaps/LocateCurrentLocation";
import { formatRelative } from 'date-fns';
import {Button} from "@material-ui/core";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "50vh",
};
//Default Location
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
    const [selected, setSelected] = useState(undefined);

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, []);

    const onMapClick = useCallback((event) => {
            setMarkers(current => [...current,
                {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                    time: new Date(),
                },
            ]);
        },
        []);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

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
                       onClick={onMapClick}
                       onLoad={onMapLoad}
            >
                {markers.map((marker) => (
                        <Marker
                            key={marker.time.toISOString()}
                            position={{lat: marker.lat, lng: marker.lng
                            }}
                            onClick={() => {
                                setSelected(marker);
                            }}
                        />
                ))}
            }}

                {selected && (
                    <InfoWindow
                        position={{lat: selected.lat, lng: selected.lng}}
                        onCloseClick={() => {
                            setSelected(null);
                        }}>
                        <div>
                            <p>Locationinfo: {formatRelative(selected.time, new Date())}</p>
                        </div>
                    </InfoWindow>)}
                <LocateCurrentLocation className="locate" panTo={panTo}/>

            </GoogleMap>
        </>

    );
}

