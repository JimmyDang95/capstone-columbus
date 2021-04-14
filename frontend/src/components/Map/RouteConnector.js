import { Marker, Polyline} from "@react-google-maps/api";
import React from "react";

export default function RouteConnector ({markers, setSelected}) {

    //coordinates and styling for Polyline to draw route
    const polyLineCoords = markers.map(marker => {
        return {lat: marker.lat, lng: marker.lng};
    })

    const polylineOptions = {
        strokeColor: '#C73D22',
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
                    onClick={() => {
                        setSelected(marker);
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