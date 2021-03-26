import React from 'react';
import {GoogleMap, useLoadScript, InfoWindow} from '@react-google-maps/api';
import {useState, useCallback, useRef} from 'react'
import PanToCurrentLocation from "./Map/PanToCurrentLocation";
import {formatRelative} from 'date-fns';
import RouteConnector from "./Map/RouteConnector";
import Search from "./Map/Search";

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



export default function MapContainer({markers, setMarkers}) {

    // script to load the map + libraries
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });


    // infoWindow for selected marker
    const [selected, setSelected] = useState(null);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

 /*   const handleNameChange = (event) => {
        setMarkers((current) => [{
            ...current,

            locationName: event.target.value
        }
        ]);
    }*/


    // makes map re-center to new position and prevents re-render
    // useRef keeps a state without re-rendering => (opposite of useState)
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, []);


    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            {/*Zoomlevels:
            1: World
            5: Landmass/continent
            10: City
            15: Streets
            20: Buildings*/}

            <Search panTo={panTo}/>

            <div className="mapContainer">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={15}
                    center={center}
                    options={options}
                    onClick={onMapClick}
                    onLoad={onMapLoad}
                >
                    <PanToCurrentLocation className="locate" panTo={panTo}/>
                    <RouteConnector markers={markers} setSelected={setSelected}/>
                    {selected && (
                        <InfoWindow
                            position={{lat: selected.lat, lng: selected.lng}}
                            onCloseClick={() => {
                                setSelected(null);
                            }}>
                            <div>
                                <p>Locationinfo: {formatRelative(selected.time, new Date())}
                                </p>
                                <button
                                    onClick={() => {
                                        setMarkers(null)
                                        setMarkers(markers.filter(marker => marker !== selected))
                                        setSelected(null)
                                    }}>
                                    Delete this location
                                </button>
                              {/* <input placeholder="Enter Locationname" value={markers.locationName} onChange={handleNameChange}/>*/}
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </div>
        </div>
    );
}
