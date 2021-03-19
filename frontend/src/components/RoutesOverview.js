import {useEffect, useState} from "react";
import RouteList from "./RouteList";
import {getRoutes, postRoute} from "../service/columbusApiService";
import AddNewRoute from "./AddNewRoute";

export default function RoutesOverview(){
    const [routes, setRoutes] = useState([])
    useEffect(() => {
        getRoutes()
            .then(setRoutes)
            .catch((error) => console.error(error))
    }, [])

    const addNewRoute = (route) =>
        postRoute(route)
            .then((newRoute) => {
                const updatedRoutes = [...routes, newRoute]
                setRoutes(updatedRoutes)
            })
            .catch((error) => console.error(error))

    return(
        <div>
            <RouteList routes={routes}/>
            <AddNewRoute onAdd={addNewRoute}/>
        </div>
    )
}