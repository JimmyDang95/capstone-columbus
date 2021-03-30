import AddNewRouteForm from "../components/AddNewRouteForm";
import {postRoute} from "../service/columbusApiService";
import {useState} from "react";
import MapContainer from "../components/MapContainer";

const initState = {name: "", country: "", creatorUserName: "", locations: [] }

export default function NewRoutePage() {
    const [routes, setRoutes] = useState([])
    const [routeToAdd, setRouteToAdd] = useState(initState)

    // set markers onClick on the map
    const [markers, setMarkers] = useState([]);

    const handleChange = (event) => {
        setRouteToAdd({...routeToAdd,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setRouteToAdd({...routeToAdd,locations: markers})
       postRoute(routeToAdd)
            .then((newRoute) => {
                const updatedRoutes = [...routes, newRoute]
                setRoutes(updatedRoutes)
            })
            .catch((error) => console.error(error))
    }



    return (
        <React.Fragment>
            <MapContainer markers={markers} setMarkers={setMarkers} className="mapContainer"/>
            <AddNewRouteForm onSubmit={handleSubmit} routeToAdd={routeToAdd} handleChange={handleChange}/>
            <div>{markers.map(marker => <><p>{marker.lat}</p><p>{marker.locationName}</p></>)}</div>
        </React.Fragment>
    )
}
