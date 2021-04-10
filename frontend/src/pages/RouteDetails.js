import React, {useEffect, useState} from "react";
import {getRoute} from "../service/columbusApiService";
import styled from 'styled-components/macro'
import {Card, Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";
import RouteDetailsMap from "../components/RouteDetailsMap";
import AppHeader from "../components/AppHeader";
import BackgroundLayout from "../components/BackgroundLayout";

export default function RouteDetails() {

    const {name} = useParams()
    const [routeData, setRouteData] = useState()


    useEffect(() => {
        getRoute(name)
            .then(setRouteData)
            .catch((error) => console.error(error))
    }, [name])

    if (!routeData) {
        return (
            <section>
                <p>Loading</p>
            </section>
        )
    }

    return (
        <>
            <BackgroundLayout>
            <AppHeader/>
            <RouteDetailsMap defaultMarkers={routeData?.locations}/>
            <BoxWrapper>
                <Card className="box"  variant="outlined">
                        <Typography color="textSecondary" className="creator" gutterBottom>
                            Creator: {routeData.creatorUserName}
                        </Typography>
                        <Typography className="routeName" variant="h5" component="h2"> Routename: {routeData.name}</Typography>
                        <Typography className="country" color="textSecondary"> Country: {routeData.country} </Typography>
                        <Typography className="locations" variant="body2" component="p">Visited
                            Locations: {routeData?.locations?.map(location =>
                                <p>{location.locationName}</p>)}</Typography>
                </Card>
            </BoxWrapper>
            </BackgroundLayout>
        </>

    )

}

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  text-align: center;
  font-family: "Glacial Indifference", serif;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  .box {
    border-radius: 12px;
    /*top right bottom left*/
    background-color: rgba(255, 255, 255, 0.5);
    width: 80%;
    height: 80%;
    overflow-y: scroll;

    .creator {
      font-family: "Glacial Indifference", serif;
    }

    .routeName {
      font-family: "Glacial Indifference", serif;
    }

    .country {
      font-family: "Glacial Indifference", serif;

    }

    .locations {
      font-family: "Glacial Indifference", serif;
    }
  }
  `