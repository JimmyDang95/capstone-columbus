package de.jimmy.columbus.service;

import de.jimmy.columbus.db.RoutesMongoDb;
import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;

import de.jimmy.columbus.utils.TimestampUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;

import static org.mockito.Mockito.*;

import static org.hamcrest.Matchers.*;


class RouteServiceTest {

    private final RoutesMongoDb routeDb = mock(RoutesMongoDb.class);
    private final RouteService routeService = new RouteService(routeDb);

    private Route createTestRoute() {
        return Route.builder()
                .name("TestRoute")
                .country("Germany")
                .creatorUserName("Hans")
                .build();
    }


    @Test
    @DisplayName("List routes should return list of routes from db")
    public void listRoutes() {
        //GIVEN
        when(routeDb.findAll()).thenReturn(List.of(
                Route.builder()
                        .name("TestRoute")
                        .country("Germany")
                        .creatorUserName("Hans")
                        .build()
                ));


        //WHEN
        List<Route> routes = routeService.listRoutes();

        //THEN
        assertThat(routes, containsInAnyOrder(
                Route.builder()
                        .name("TestRoute")
                        .country("Germany")
                        .creatorUserName("Hans")
                        .build()
        ));

    }

    @Test
    @DisplayName("getRouteByRouteName should return existing route from Db")
    public void getExistingRoute(){
        //GIVEN
        String name = "Testroute";
        when(routeDb.findById(name)).thenReturn(
                Optional.of(createTestRoute())
        );

        //WHEN
        Optional<Route> result = routeService.getRouteByRouteName(name);

        //THEN
        assertThat(result.get(), is(createTestRoute()));
        verify(routeDb).findById(name);

    }

    @Test
    @DisplayName("Add method should a add a route object to route List and return the added route")
    void addRouteTest() {
        //GIVEN
        AddRouteDto addRouteDto = AddRouteDto.builder()
                .name("TestRoute")
                .country("Germany")
                .creatorUserName("Hans")
                .build();


        //WHEN
        Route addedRoute = routeService.addRoute(addRouteDto);


        //THEN
        Route expectedRoute = Route.builder()
                .name("TestRoute")
                .country("Germany")
                .creatorUserName("Hans")
                .build();

        assertThat(addedRoute, is(expectedRoute));
        verify(routeDb).save(expectedRoute);

    }

    @Test
    @DisplayName("Delete Route from list and db")
    void deleteRouteTest() {

     //GIVEN


     //WHEN
     routeService.deleteRoute("testroute");

     //THEN
     verify(routeDb).deleteById("testroute");


    }
}