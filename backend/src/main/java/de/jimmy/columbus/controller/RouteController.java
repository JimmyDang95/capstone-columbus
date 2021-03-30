package de.jimmy.columbus.controller;


import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;
import de.jimmy.columbus.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/routes")
public class RouteController {

    private final RouteService routeService;

    @Autowired
    public RouteController(RouteService routeService){
        this.routeService = routeService;
    }

    @GetMapping
    public List<Route> listRoutes() {
        return routeService.listRoutes();
    }

    @PostMapping
    public Route addRoute(@RequestBody AddRouteDto dto){
        return routeService.addRoute(dto);
    }

    @DeleteMapping("{name}")
    public void deleteRoute(@PathVariable String name) {
        routeService.deleteRoute(name);
    }

    @GetMapping("{name}")
    public Route getRoute (@PathVariable String name){
        return routeService.getRouteByRouteName(name)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "route not found"));
    }
}
