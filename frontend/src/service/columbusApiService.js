import axios from 'axios';

const routeUrl = '/api/routes'

export const getRoutes = () =>
    axios
        .get(routeUrl)
        .then((response) => response.data);


export const postRoute = (route) =>
    axios
        .post(routeUrl, {route})
        .then((response) => response.data)