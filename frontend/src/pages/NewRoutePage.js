import AddNewRouteForm from "../components/AddNewRouteForm";
import {postRoute} from "../service/columbusApiService";
import React, {useLayoutEffect, useState} from "react";
import MapContainer from "../components/MapContainer";
import styled from "styled-components/macro";
import BackgroundLayout from "../components/BackgroundLayout";



const initState = {name: "", country: "", creatorUserName: "", locations: []}

export default function NewRoutePage() {
    const [routes, setRoutes] = useState([])
    const [routeToAdd, setRouteToAdd] = useState(initState)

    // set markers onClick on the map
    const [markers, setMarkers] = useState([]);

    const handleChange = (event) => {
        setRouteToAdd({...routeToAdd, [event.target.name]: event.target.value})
    }

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
            <MapContainer markers={markers} setMarkers={setMarkers}/>
            <AddNewRouteForm onSubmit={handleSubmit} markers={markers} setRouteToAdd={setRouteToAdd} routeToAdd={routeToAdd} handleChange={handleChange}/>
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
`