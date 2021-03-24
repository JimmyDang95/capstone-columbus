import React, {useRef} from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow, Polyline} from '@react-google-maps/api';
import {useState, useCallback} from 'react'
import PanToCurrentLocation from "./Map/PanToCurrentLocation";
import {formatRelative} from 'date-fns';
import RouteConnector from "./Map/RouteConnector";
import Search from "./Map/Search";
import SetInfoWindowOfMarker from "./Map/SetInfoWindowOfMarker";

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
    // script to load the map + libraries
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    // set markers onClick on the map
    const [markers, setMarkers] = useState([]);

    // infoWindow for selected marker
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


    // makes map re-center to new position and prevents re-render
    // useRef keeps a state without re-rendering => (opposite of useState)
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    // re-center map to new search location
    const reCenter = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(15)
    })

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

            <Search panTo={reCenter}/>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >

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
                            <button>
                                Add this location
                            </button>
                            <button onClick={() => {
                                setMarkers(null)
                                setMarkers(markers.filter(marker => marker !== selected))}}>
                                Delete this location
                            </button>
                        </div>
                    </InfoWindow>
                )}
                <PanToCurrentLocation className="locate" panTo={panTo}/>
            </GoogleMap>
        </>
    );
}
