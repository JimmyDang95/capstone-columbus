import axiosConfig from "./axiosConfig";

const routeUrl = '/api/routes'

export const getRoutes = () =>
    axiosConfig.axiosInstance
        .get(routeUrl)
        .then((response) => response.data);

export const getRoute = (name) =>
    axiosConfig.axiosInstance
        .get(`${routeUrl}/${name}`)
        .then((response) => response.data)

export const postRoute = (newRouteDto) =>
    axiosConfig.axiosInstance
        .post(routeUrl, newRouteDto)
        .then((response) => response.data)


export const deleteRouteFromList = (routeName) =>
    axiosConfig.axiosInstance
        .delete(`${routeUrl}/${routeName}`)
