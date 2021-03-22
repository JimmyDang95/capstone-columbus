import React, {useEffect, useState} from "react";
import RouteList from "./RouteList";
import {deleteRouteFromList, getRoutes, postRoute} from "../service/columbusApiService";
import AddNewRoute from "./AddNewRoute";
import {Button} from "@material-ui/core";

export default function RoutesOverview() {
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        getRoutes()
            .then(setRoutes)
            .catch((error) => console.error(error))
    }, [])

    const addNewRoute = (routeName, country, creatorUserName) => {
        const newRouteDto = {"name": routeName, "country": country, "creatorUserName": creatorUserName}
        postRoute(newRouteDto)
            .then((newRoute) => {
                const updatedRoutes = [...routes, newRoute]
                setRoutes(updatedRoutes)
            })
            .catch((error) => console.error(error))
    }

    const deleteRoute = (routeId) => {
        deleteRouteFromList(routeId).then(() => {
            setRoutes([
                ...routes.filter((route) => route.id !== routeId),
            ])
        })
    }

    return (
        <>
            <RouteList routes={routes} onDeleteRouteItem={deleteRoute}/>
            <AddNewRoute onAdd={addNewRoute}/>
            <Button variant="outlined" color="primary" position="fixed">
                Add current location
            </Button>
        </>
    )
}