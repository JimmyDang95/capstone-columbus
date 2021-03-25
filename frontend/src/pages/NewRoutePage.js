import AddNewRouteForm from "../components/AddNewRouteForm";
import {postRoute} from "../service/columbusApiService";
import {useState} from "react";
import MapContainer from "../components/MapContainer";
import styled from 'styled-components/macro'

export default function NewRoutePage() {
    const [routes, setRoutes] = useState([])

    const addNewRoute = (routeName, country, creatorUserName) => {
        const newRouteDto = {"name": routeName, "country": country, "creatorUserName": creatorUserName}
        postRoute(newRouteDto)
            .then((newRoute) => {
                const updatedRoutes = [...routes, newRoute]
                setRoutes(updatedRoutes)
            })
            .catch((error) => console.error(error))
    }

    return (
        <>
            <MapContainer className="mapContainer"/>
            <AddNewRouteForm onAdd={addNewRoute}/>
        </>
    )
}
