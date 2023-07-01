import React from "react";
import {Card,Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import styled from "styled-components/macro";

export default function RouteListItem({route, onDeleteRouteItem}) {

    return (
        <BoxWrapper>
            <Card className="box" variant="outlined">
                    <Typography className="creator" color="textSecondary" gutterBottom>
                        Creator: {route.creatorUserName}
                    </Typography>
                    <Typography className="routeName" variant="h5" component="h2"> Routename: {route.name}</Typography>
                    <Typography className="country"> Country: {route.country} </Typography>
                    <Typography variant="body2" component="div" className="locations">Visited
                        Locations: {route?.locations?.map(location => <p
                            key={`${location.lat} - ${location.lng}`}>{location.locationName}</p>)}</Typography>
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
                        <button className="btn">
                            Details
                        </button>
                    </Link>
            </Card>
        </BoxWrapper>
    )

}

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  text-align: center;
  justify-content: center;

  .box {
    border-radius: 12px;
    padding: 10px 15px 10px 15px;
    background-color: rgba(255, 255, 255, 0.5);
    font-family: "Glacial Indifference", serif;
    width: 80%;
    
    .btn {
      font-family: "Glacial Indifference", serif;
      text-decoration: none;
      font-size: 10px;
      font-weight: bold;
      background-color: #e74c3c;
      padding: 6px 8px;
      margin: 3px;
      border-radius: 4px;
      text-transform: uppercase;
    }
    
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
`