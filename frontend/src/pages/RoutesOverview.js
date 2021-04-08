import React, {useEffect, useState} from "react";
import RouteList from "../components/RouteList";
import {deleteRouteFromList, getRoutes} from "../service/columbusApiService";
import Navbar from "../components/Navbar/Navbar";
import BackgroundLayout from "../components/BackgroundLayout";


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
                <RouteList routes={routes} onDeleteRouteItem={deleteRoute}/>
            </BackgroundLayout>
        </>
    )
}



