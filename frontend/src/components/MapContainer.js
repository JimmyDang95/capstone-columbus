import React from 'react';
import {GoogleMap, useLoadScript, InfoWindow} from '@react-google-maps/api';
import {useState, useCallback, useRef} from 'react'
import PanToCurrentLocation from "./Map/PanToCurrentLocation";
import {formatRelative} from 'date-fns';
import RouteConnector from "./Map/RouteConnector";
import Search from "./Map/Search";


// additional google libraries; "places" for the search function on the map
const libraries = ['places']

// set size of the rendered map
const mapContainerStyle = {
    width: "100vw",
    height: "68vh",
};

//Default Location of Oldenburg
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
        version: '3.42.9',
        libraries,
    });


    // infoWindow for selected marker
    const [selected, setSelected] = useState(null);


    // prevent map to trigger a re-render
    const onMapClick = useCallback((event) => {
        setMarkers((current) => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            }
        ]);
    }, [setMarkers]);


    const handleSelectedNameChange = (event) => {
        setMarkers((current) => current.map(marker => {
            if (marker.lat === selected.lat && marker.lng === selected.lng) {
                return {...marker, locationName: event.target.value,}
            }
            return marker;
        }))
    }


    // makes map re-center to new position and prevents re-render
    // useRef keeps a state without re-rendering => (opposite of useState)
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);


    // re-center map to new search location
    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(17);
    }, []);

    if (loadError) {
        return "Error loading maps";
    }
    if (!isLoaded) {
        return "Loading Maps";
    }

    return (

        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                <Search panTo={panTo}/>
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
                            <input placeholder="Enter Locationname" value={markers.locationName}
                                   onChange={handleSelectedNameChange}/>
                            <button
                                onClick={() => {
                                    setMarkers(null)
                                    setMarkers(markers.filter(marker => marker !== selected))
                                    setSelected(null)
                                }}>
                                Delete this location
                            </button>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
}
