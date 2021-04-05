import AddNewRouteForm from "../components/AddNewRouteForm";
import {postRoute} from "../service/columbusApiService";
import React, {useState, Fragment, useEffect} from "react";
import MapContainer from "../components/MapContainer";

const initState = {name: "", country: "", creatorUserName: "", locations: []}

export default function NewRoutePage() {
    const [routes, setRoutes] = useState([])
    const [routeToAdd, setRouteToAdd] = useState(initState)

    // set markers onClick on the map
    const [markers, setMarkers] = useState([]);

    const handleChange = (event) => {
        setRouteToAdd({...routeToAdd, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        setRouteToAdd({...routeToAdd, locations: markers})
    }, [markers, routeToAdd])

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
        <>
            <MapContainer markers={markers} setMarkers={setMarkers} className="mapContainer"/>
            <AddNewRouteForm onSubmit={handleSubmit} routeToAdd={routeToAdd} handleChange={handleChange}/>
            <div>{markers.map(marker => <Fragment key={`${marker.lat} - ${marker.lng}`}><p>{marker.locationName}</p>
            </Fragment>)}</div>
        </>
    )
}
