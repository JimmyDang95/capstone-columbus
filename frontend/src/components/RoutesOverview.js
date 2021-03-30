import React, {useEffect, useState} from "react";
import RouteList from "./RouteList";
import {deleteRouteFromList, getRoutes} from "../service/columbusApiService";



export default function RoutesOverview() {
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        getRoutes()
            .then(setRoutes)
            .catch((error) => console.error(error))
    }, [])


    const deleteRoute = (routeId) => {
        deleteRouteFromList(routeId).then(() => {
            setRoutes(
                routes.filter((route) => route.id !== routeId))
        })
    }

    return (
        <>
            <RouteList routes={routes} onDeleteRouteItem={deleteRoute}/>
        </>
    )
}



