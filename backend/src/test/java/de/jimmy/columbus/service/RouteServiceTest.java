package de.jimmy.columbus.service;

import de.jimmy.columbus.db.RoutesMongoDb;
import de.jimmy.columbus.db.UserMongoDb;
import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;

import static org.mockito.Mockito.*;

import static org.hamcrest.Matchers.*;


class RouteServiceTest {

    private final RoutesMongoDb routeDb = mock(RoutesMongoDb.class);
    private final RouteService routeService = new RouteService(routeDb);


    @Test
    @DisplayName("List routes should return list of routes from db")
    public void listRoutes() {
        //GIVEN
        when(routeDb.findAll()).thenReturn(List.of(
                new Route("testRoute", "testLocation", 53.136719, 8.216540),
                new Route("testRoute2", "testLocation2", 53.551086, 9.993682)));

        //WHEN
        List<Route> routes = routeService.listRoutes();

        //THEN
        assertThat(routes, containsInAnyOrder(
                new Route("testRoute", "testLocation", 53.136719, 8.216540),
                new Route("testRoute2", "testLocation2", 53.551086, 9.993682)));
    }

    @Test
    @DisplayName("Add method should a add a route object to route List and return the added route")
    void addRouteTest() {
        //GIVEN
        AddRouteDto addRouteDto = new AddRouteDto(
                "testroute",
                "testlocation",
                53.136719,
                8.216540
                );

        //WHEN
        Route addedRoute = routeService.addRoute(addRouteDto);
        Route expectedRoute = new Route(
                "testroute",
                "testlocation",
                53.136719,
                8.216540
        );

        //THEN
        assertThat(addedRoute, is(expectedRoute));
        verify(routeDb).save(expectedRoute);

    }
}