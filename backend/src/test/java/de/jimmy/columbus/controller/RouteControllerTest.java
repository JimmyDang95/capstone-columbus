package de.jimmy.columbus.controller;

import de.jimmy.columbus.db.RoutesMongoDb;
import de.jimmy.columbus.db.UserMongoDb;
import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.dto.LoginDto;
import de.jimmy.columbus.model.ColumbusUser;
import de.jimmy.columbus.model.Route;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;



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

    @Autowired
    private UserMongoDb userMongoDb;

    @Autowired
    private PasswordEncoder encoder;

    @BeforeEach
    public void setup() {
        routeDb.deleteAll();
        userMongoDb.deleteAll();
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
        HttpHeaders headers = new HttpHeaders();
        String token = loginToApp();
        headers.setBearerAuth(token);
        HttpEntity<AddRouteDto> entity = new HttpEntity<>(headers);

        ResponseEntity<Route[]> response = testRestTemplate.exchange(getUrl(), HttpMethod.GET, entity,
                Route[].class);

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
    @DisplayName("GET one route")
    public void getOneRoute() {
        //GIVEN
        routeDb.save(Route.builder()
                .id("1")
                .name("TestRoute")
                .country("Germany")
                .creatorUserName("Hans")
                .build());

        //WHEN
        HttpHeaders headers = new HttpHeaders();
        String token = loginToApp();
        headers.setBearerAuth(token);
        HttpEntity<AddRouteDto> entity = new HttpEntity<>(headers);

        ResponseEntity<Route[]> response = testRestTemplate.exchange(getUrl(), HttpMethod.GET, entity,
                Route[].class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                Route.builder()
                        .id("1")
                        .name("TestRoute")
                        .country("Germany")
                        .creatorUserName("Hans")
                        .build()
        ));
    }



    @Test
    @DisplayName("Delete route from list")
    public void deleteRouteFromList() {
        //GIVEN
        routeDb.save(Route.builder()
                        .id("222")
                        .name("TestRoute")
                        .country("Germany")
                        .creatorUserName("Hans")
                        .build());

        //WHEN
        HttpHeaders headers = new HttpHeaders();
        String token = loginToApp();
        headers.setBearerAuth(token);
        HttpEntity<AddRouteDto> entity = new HttpEntity<>(headers);

        ResponseEntity<Route[]> response = testRestTemplate.exchange(getUrl() + "/222", HttpMethod.DELETE, entity,
                Route[].class);


       //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(routeDb.existsById("222"), is(false));
    }





    private String loginToApp() {
        String password = encoder.encode("superSecretPassword");
        userMongoDb.save(ColumbusUser.builder().username("hans").password(password).build());
        ResponseEntity<String> loginResponse = testRestTemplate.postForEntity("http://localhost:" + port + "auth/login",
                new LoginDto("hans", "superSecretPassword"), String.class);
        return loginResponse.getBody();
    }

}