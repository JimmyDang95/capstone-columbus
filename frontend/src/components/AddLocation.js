/*
import {useState} from "react";
import React from "react";
import { Marker} from "@react-google-maps/api";

class AddMarkerToMap extends React.Component {
    render() {
        return null;
    }
}

export default function AddLocation() {
    const [markers, setMarkers] = useState([]);
    return (
        <AddMarkerToMap
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
        </AddMarkerToMap>
    )};
*/
