package de.jimmy.columbus.controller;

import de.jimmy.columbus.db.UserMongoDb;
import de.jimmy.columbus.dto.LoginDto;
import de.jimmy.columbus.model.ColumbusUser;
import io.jsonwebtoken.Jwts;
import org.apache.coyote.Response;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;
import static org.hamcrest.MatcherAssert.assertThat;
import org.hamcrest.Matchers;
import io.jsonwebtoken.Claims;
import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "security.jwt.secret=supertestsecret")
class LoginControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "auth/login";
    }

    @Autowired
    private UserMongoDb userMongoDb;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void loginWithValidCredentialsShouldGenerateJwtToken(){
        //GIVEN
        String username = "hans";
        String password = "super-secret";

        String encode = passwordEncoder.encode(password);
        userMongoDb.save(ColumbusUser.builder().username(username).password(encode).build());

        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity(getUrl(), new LoginDto(username, password),
                String.class);

        //THEN
        assertThat(response.getStatusCode(), Matchers.is(HttpStatus.OK));
        Claims claims = Jwts.parser().setSigningKey("supertestsecret").parseClaimsJws(response.getBody()).getBody();
        assertThat(claims.getSubject(), Matchers.is("hans"));
    }

    @Test
    public void loginWithInValidCredentialsShouldGenerateJwtToken () {
        //GIVEN
        String username = "hans";
        String password = "super-secret";

        String encode = passwordEncoder.encode(password);
        userMongoDb.save(ColumbusUser.builder().username(username).password(encode).build());

        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity(getUrl(), new LoginDto(username, "wrong " +
                "password"), String.class);

        //THEN
        assertThat(response.getStatusCode(), Matchers.is(HttpStatus.BAD_REQUEST));
    }

}