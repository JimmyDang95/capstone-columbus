import axios from 'axios';

const routeUrl = '/api/routes'

export const getRoutes = () =>
    axios
        .get(routeUrl)
        .then((response) => response.data);


export const postRoute = (newRouteDto) =>
    axios
        .post(routeUrl, newRouteDto)
        .then((response) => response.data)


export const deleteRouteFromList = (route) =>
    axios
        .delete(routeUrl + "/" + route.id)
