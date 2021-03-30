import React, {useEffect, useState} from "react";
import {getRoute} from "../service/columbusApiService";
import styled from 'styled-components/macro'
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function RouteDetails (){
    const classes = useStyles();

    const { name } = useParams()
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
        <RouteDetailsContainer>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Creator: {routeData.creatorUserName}
                    </Typography>
                    <Typography variant="h5" component="h2"> Routename: {routeData.name}</Typography>
                    <Typography className={classes.pos} color="textSecondary"> Country: {routeData.country} </Typography>
                    <Typography variant="body2" component="p">Visited Locations: {routeData?.locations?.map(location => <p>{location.locationName}</p>)}</Typography>
                </CardContent>
            </Card>
        </RouteDetailsContainer>

    )

}

const RouteDetailsContainer = styled.section`
  display: flex;
`