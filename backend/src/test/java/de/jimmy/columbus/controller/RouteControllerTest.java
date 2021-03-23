package de.jimmy.columbus.controller;

import de.jimmy.columbus.db.RoutesMongoDb;
import de.jimmy.columbus.db.UserMongoDb;
import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RouteControllerTest {

    @LocalServerPort
    private int port;

    @MockBean
    private RestTemplate restTemplate;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private RoutesMongoDb routeDb;



    @BeforeEach
    public void setup() {
        routeDb.deleteAll();
    }

    private String getUrl() {
        return "http://localhost:" + port + "api/routes";
    }

    @Test
    @DisplayName("GET all routes ")
    public void getAllRoutes() {
        //GIVEN
        routeDb.save(Route.builder()
                .id("1")
                .name("TestRoute")
                .country("Germany")
                .creatorUserName("Hans")
                .build());

        routeDb.save(Route.builder()
                .id("2")
                .name("TestRoute2")
                .country("Sweden")
                .creatorUserName("Franz")
                .build());
        //WHEN
        ResponseEntity<Route[]> response = testRestTemplate.getForEntity(getUrl(), Route[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                Route.builder()
                        .id("1")
                        .name("TestRoute")
                        .country("Germany")
                        .creatorUserName("Hans")
                        .build(),
                Route.builder()
                        .id("2")
                        .name("TestRoute2")
                        .country("Sweden")
                        .creatorUserName("Franz")
                        .build()
                ));
    }

    @Test
    @DisplayName("Delete route from list")
    public void deleteRouteFromList() {
        //GIVEN
        routeDb.save(Route.builder()
                        .id("1")
                        .name("TestRoute")
                        .country("Germany")
                        .creatorUserName("Hans")
                        .build());

        //WHEN
       testRestTemplate.delete(getUrl() + "/1");
       //THEN
        assertThat(routeDb.existsById("1"), is(false));
    }

}