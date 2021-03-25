import GpsFixedTwoToneIcon from '@material-ui/icons/GpsFixedTwoTone';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components/macro";

// re-center to original user position
export default function PanToCurrentLocation({panTo}) {
    return (
        <PantoIcon>
            <IconButton
                variant="contained"
                color="primary"
                onClick={() => {
                    // if user's browser allows it, get user's position and re-center to it
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            panTo({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            });
                        },
                        () => null);
                }}>
                <GpsFixedTwoToneIcon className="gpsicon" size="large"/>
            </IconButton>
        </PantoIcon>
    );
}


const PantoIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    
    .gpsicon {
        margin-right: 15px;
        margin-top: 15px;
    }
 `





