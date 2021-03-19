package de.jimmy.columbus.utils;

import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

public class ParseUtils {

    public static List<AddRouteDto> parseToRouteDtos(List<Route> routes) {

        return routes.stream()
                .map(ParseUtils::parseToRouteDto)
                .collect(Collectors.toList());

    }

    public static AddRouteDto parseToRouteDto(Route route) {
        return new AddRouteDto(
                route.getName(),
                route.getCountry(),
                route.getCreatorUserName(),
                LocalDate.ofInstant(route.getCreationDate(), ZoneId.of("Europe/Berlin")),
                LocalTime.ofInstant(route.getCreationDate(), ZoneId.of("Europe/Berlin")));
    }

}
