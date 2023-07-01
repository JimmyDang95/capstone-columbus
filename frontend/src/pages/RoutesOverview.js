import React, {useEffect, useState} from "react";
import RouteList from "../components/RouteList";
import {deleteRouteFromList, getRoutes} from "../service/columbusApiService";
import BackgroundLayout from "../components/BackgroundLayout";
import AppHeader from "../components/AppHeader";


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
            <BackgroundLayout>
                <AppHeader/>
                <RouteList routes={routes} onDeleteRouteItem={deleteRoute}/>
            </BackgroundLayout>
        </>
    )
}



