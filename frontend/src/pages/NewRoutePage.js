import AddNewRouteForm from "../components/AddNewRouteForm";
import {postRoute} from "../service/columbusApiService";
import React, {useState, Fragment, useLayoutEffect} from "react";
import MapContainer from "../components/MapContainer";
import styled from "styled-components/macro";
import {Card} from "@material-ui/core";
import AppHeader from "../components/AppHeader";
import BackgroundLayout from "../components/BackgroundLayout";
import NewRouteLocationsCard from "../components/NewRouteLocationsCard";


const initState = {name: "", country: "", creatorUserName: "", locations: []}

export default function NewRoutePage() {
    const [routes, setRoutes] = useState([])
    const [routeToAdd, setRouteToAdd] = useState(initState)

    // set markers onClick on the map
    const [markers, setMarkers] = useState([]);

    const handleChange = (event) => {
        setRouteToAdd({...routeToAdd, [event.target.name]: event.target.value})
    }

   /* useLayoutEffect(() => {
        setRouteToAdd({...routeToAdd, locations: markers})
    }, [markers]) // eslint-disable-line react-hooks/exhaustive-deps
*/
    const handleSubmit = (event) => {
        event.preventDefault()
        postRoute(routeToAdd)
            .then((newRoute) => {
                const updatedRoutes = [...routes, newRoute]
                setRoutes(updatedRoutes)
            })
            .then(() => {
                setRouteToAdd(initState)
                setMarkers([])
            })
            .catch((error) => console.error(error))
    }


    return (
        <Wrapper>
            <BackgroundLayout>
            <MapContainer markers={markers} setMarkers={setMarkers}/>
            <AddNewRouteForm onSubmit={handleSubmit} markers={markers} setRouteToAdd={setRouteToAdd} routeToAdd={routeToAdd} handleChange={handleChange}/>
            {/*<Card className="item">
                {markers.map(marker =>
                    <Fragment key={`${marker.lat} - ${marker.lng}`}>
                        <p>{marker.locationName}</p>
                    </Fragment>)}
            </Card>*/}
            </BackgroundLayout>
        </Wrapper>
    )
}


const Wrapper = styled.div`
  position: absolute;
  text-align: center;
  font-family: "Glacial Indifference", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  
/*  .item {
    background-color: red;
    position: absolute;
    bottom: 20px;
    left: 10px;
    font-size: 14px;
    max-width: 100px;
    max-height: 150px;
    overflow: scroll;
  }*/
`