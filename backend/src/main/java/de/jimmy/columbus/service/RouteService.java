package de.jimmy.columbus.service;

import de.jimmy.columbus.db.RoutesMongoDb;

import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;

import de.jimmy.columbus.utils.TimestampUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class RouteService {

    private final RoutesMongoDb routeDb;
    private final TimestampUtils timestampUtils;

    @Autowired
    public RouteService(RoutesMongoDb routeDb, TimestampUtils timestampUtils){
        this.routeDb = routeDb;
        this.timestampUtils = timestampUtils;
    }

    public List<Route> listRoutes() {
        return routeDb.findAll();
    }



    public Route addRoute(AddRouteDto routeToBeAdded){
        Route routeObjectToBeSaved = Route.builder()
                .name(routeToBeAdded.getName())
                .country(routeToBeAdded.getCountry())
                .creatorUserName(routeToBeAdded.getCreatorUserName())
                .timestamp(timestampUtils.generateTimestampInstant())
                .build();


        routeDb.save(routeObjectToBeSaved);
        return (routeObjectToBeSaved);

    }
}
