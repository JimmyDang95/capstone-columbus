
import {Button} from "@material-ui/core";


export default function LocateCurrentLocation ({panTo}) {

    return (
        <Button
            variant="contained"
            color="primary"
                onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    })
                });
        }}>
            Zeige Standort
        </Button>
    )
}






