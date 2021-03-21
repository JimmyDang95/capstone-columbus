import GpsFixedTwoToneIcon from '@material-ui/icons/GpsFixedTwoTone';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components/macro";

export default function LocateCurrentLocation ({panTo}) {

    return (
        <PantoIcon>
        <IconButton
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
            <GpsFixedTwoToneIcon size="large"/>
        </IconButton>
        </PantoIcon>
    )
}


const PantoIcon = styled.div`
    display: grid;
    justify-content: flex-end;
 `;





