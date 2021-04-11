import React, {Fragment, useLayoutEffect} from 'react'
import styled from "styled-components/macro";
import {Dialog} from "@material-ui/core";
import { IoIosCloseCircleOutline, IoListCircleSharp} from "react-icons/all";

export default function NewRouteLocationsCard({setRouteToAdd, routeToAdd, markers}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useLayoutEffect(() => {
        setRouteToAdd({...routeToAdd, locations: markers})
    }, [markers]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
        <BoxWrapper>
            <IoListCircleSharp className="listIcon" onClick={handleClickOpen} size={35}/>
            <Dialog open={open} onClose={handleClose} className="Dialog">
                <Title className="form-dialog-title">List of visited Locations</Title>
                <Form>
                <div className="item">{markers.map(marker => <Fragment key={`${marker.lat} - ${marker.lng}`}>
                    <p>{marker.locationName}</p>
                </Fragment>)}
                    <IoIosCloseCircleOutline size={35} className="closeIcon" onClick={handleClose}/>
                </div>
                </Form>
            </Dialog>
        </BoxWrapper>
        </>
    );
}

const BoxWrapper = styled.div`
  flex-direction: column;
  display: flex;
  
  .listIcon {
    padding: 5px;
    color: #3448AB;
  }
  
  .closeIcon {
    color: white;
  }
  
`

const Title = styled.section`
  padding: 15px 20px 20px 20px;
  text-align: center;
  font-family: "Glacial Indifference", serif;
  font-size: 20px;
  font-weight: bold;
  background-color: #3448AB;
  color: white;
`

const Form = styled.form`
  font-family: "Glacial Indifference", serif;
  flex-direction: column;
  display: flex;
  color: white;
  background-color: #3448AB;
  padding: 15px 20px 10px 20px;
  text-align: center;
  `