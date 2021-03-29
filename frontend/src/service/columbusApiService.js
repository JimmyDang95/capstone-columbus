import axios from 'axios';

const userUrl = 'api/user'
const routeUrl = '/api/routes'

export const getRoutes = () =>
    axios
        .get(routeUrl)
        .then((response) => response.data);

export const getRoute = (name) =>
    axios
        .get(`${routeUrl}/${name}`)
        .then((response) => response.data)

export const postRoute = (newRouteDto) =>
    axios
        .post(routeUrl, newRouteDto)
        .then((response) => response.data)


export const deleteRouteFromList = (routeName) =>
    axios
        .delete(`${routeUrl}/${routeName}`)
