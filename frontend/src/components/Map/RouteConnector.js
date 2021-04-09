import { Marker, Polyline} from "@react-google-maps/api";
import React from "react";

export default function RouteConnector ({markers}) {

    //coordinates and styling for Polyline to draw route
    const polyLineCoords = markers.map(marker => {
        return {lat: marker.lat, lng: marker.lng};
    })

    const polylineOptions = {
        strokeColor: '#ffbs00',
        strokeOpacity: 0.8,
        strokeWeight: 4,
    }

    return (
        <div>
            {markers.map((marker) => (
                <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{
                        lat: marker.lat, lng: marker.lng
                    }}
                />
            ))}
            }}
            <Polyline
                path={polyLineCoords}
                options={polylineOptions}
            />
        </div>
    )

}