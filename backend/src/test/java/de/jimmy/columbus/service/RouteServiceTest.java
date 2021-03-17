package de.jimmy.columbus.service;

import de.jimmy.columbus.db.RoutesMongoDb;
import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;

import de.jimmy.columbus.utils.TimestampUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;

import static org.mockito.Mockito.*;

import static org.hamcrest.Matchers.*;


class RouteServiceTest {

    private final RoutesMongoDb routeDb = mock(RoutesMongoDb.class);
    private final TimestampUtils timestampUtils = mock(TimestampUtils.class);


    private final RouteService routeService = new RouteService(routeDb, timestampUtils);


/*    @Test
    @DisplayName("List routes should return list of routes from db")
    public void listRoutes() {
        //GIVEN
        when(routeDb.findAll()).thenReturn(List.of(
                new AddRouteDto("TestRoute", "Germany", "TestCreator",
                        LocalDate.of(2020, 11, 25),
                        LocalTime.of(11, 00)),
                new AddRouteDto("TestRoute2", "England", "TestCreator2",
                        LocalDate.of(2020, 12, 26),
                        LocalTime.of(12, 00))))
                ;
        //WHEN
        List<Route> routes = routeService.listRoutes();

        //THEN
        assertThat(routes, containsInAnyOrder(
                new AddRouteDto("TestRoute", "Germany", "TestCreator", LocalDate.of(2020, 11, 25),
                        LocalTime.of(11, 00))));

    }*/
/*
    @Test
    @DisplayName("Add method should a add a route object to route List and return the added route")
    void addRouteTest() {
        //GIVEN
        AddRouteDto addRouteDto = new AddRouteDto(
                new Route("testRoute", "Germany", "testcreator",
                        LocalDate.of(2021, 11, 25),
                        "hamburg", 53.136719,8.216540),

        //WHEN
        Route addedRoute = routeService.addRoute(addRouteDto);
        new Route("testRoute", "Germany", "testcreator",
                LocalDate.of(2021, 11, 25),
                "hamburg", 53.136719,8.216540),

        //THEN
        assertThat(addedRoute, is(expectedRoute));
        verify(routeDb).save(expectedRoute);

    }*/
}