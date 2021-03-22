import GpsFixedTwoToneIcon from '@material-ui/icons/GpsFixedTwoTone';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components/macro";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        position: 'sticky'
    },
});


export default function LocateCurrentLocation ({panTo}) {
    const classes = useStyles();
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





