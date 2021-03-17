package de.jimmy.columbus.service;

import de.jimmy.columbus.db.RoutesMongoDb;
import de.jimmy.columbus.db.UserMongoDb;
import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;
import de.jimmy.columbus.utils.ParseUtils;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
                .routeName(routeToBeAdded.getRouteName())
                .locationName(routeToBeAdded.getLocationName())
                .lat(routeToBeAdded.getLat())
                .lng(routeToBeAdded.getLng())
                .build();


        routeDb.save(routeObjectToBeSaved);
        return (routeObjectToBeSaved);

    }
}
