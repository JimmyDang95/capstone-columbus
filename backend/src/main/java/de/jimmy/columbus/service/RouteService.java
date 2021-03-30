package de.jimmy.columbus.service;

import de.jimmy.columbus.db.RoutesMongoDb;

import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;

import de.jimmy.columbus.utils.TimestampUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    private final RoutesMongoDb routeDb;

    @Autowired
    public RouteService(RoutesMongoDb routeDb){
        this.routeDb = routeDb;
    }

    public List<Route> listRoutes() {
        return routeDb.findAll();
    }



    public Route addRoute(AddRouteDto routeToBeAdded){
        Route routeObjectToBeSaved = Route.builder()
                .name(routeToBeAdded.getName())
                .country(routeToBeAdded.getCountry())
                .creatorUserName(routeToBeAdded.getCreatorUserName())
                .locations(routeToBeAdded.getLocations())
                .build();


        routeDb.save(routeObjectToBeSaved);
        return routeObjectToBeSaved;

    }

    public void deleteRoute(String name) {
        routeDb.deleteById(name);
    }

    public Optional<Route> getRouteByRouteName(String id) {
        return routeDb.findById(id);
    }
}
