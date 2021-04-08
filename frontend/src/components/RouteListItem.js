import React from "react";
import {Box, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import styled from "styled-components/macro";

export default function RouteListItem({route, onDeleteRouteItem}) {

    return (
        <BoxWrapper>
            <Card className="box" variant="outlined">
                <CardContent>
                    <Typography className="creator" color="textSecondary" gutterBottom>
                        Creator: {route.creatorUserName}
                    </Typography>
                    <Typography className="routeName" variant="h5" component="h2"> Routename: {route.name}</Typography>
                    <Typography className="country"> Country: {route.country} </Typography>
                    <Typography variant="body2" component="div" className="locations">Visited
                        Locations: {route?.locations?.map(location => <p
                            key={`${location.lat} - ${location.lng}`}>{location.locationName}</p>)}</Typography>
                </CardContent>
                <CardActions>
                    <button
                        className="btn"
                        onClick={() => onDeleteRouteItem(route.id)}
                        type="button"
                    >
                        Delete
                    </button>
                    <Link
                        to={`routes/${route.id}`}
                    >
                        Details
                    </Link>
                </CardActions>
            </Card>
        </BoxWrapper>
    )

}

const BoxWrapper = styled.div`
  flex-direction: column;
  display: flex;
  font-weight: bold;
  color: black;

  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    padding: 70px 100px;
    background-color: rgba(255, 255, 255, 0.5);
    font-family: "Glacial Indifference", serif;
  }

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

  .btn {
    font-family: "Glacial Indifference", serif;

  }
`
