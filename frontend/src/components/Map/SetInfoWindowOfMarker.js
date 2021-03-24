import {InfoWindow} from "@react-google-maps/api";
import {formatRelative} from "date-fns";
import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";

export default function SetInfoWindowOfMarker({ selectedMarker, setSelected, onClose, onDeleteMarker}) {

    return (
        <InfoWindow
            position={{lat: selectedMarker.lat, lng: selectedMarker.lng}}
            onCloseClick={onClose}> {
                setSelected(null)
            }}>
            <Card>
                <CardContent>
                    <Typography>
                        <p>Locationinfo: {formatRelative(selectedMarker.time, new Date())}</p>
                        <button>
                            Add this location
                        </button>
                    </Typography>
                </CardContent>
            </Card>
        </InfoWindow>
    )
}