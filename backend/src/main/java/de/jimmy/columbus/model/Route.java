package de.jimmy.columbus.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "route")
public class Route {

    @Id
    private String routeName;
    private String routeCountry;
    private double lat;
    private double lng;
    private List<Location> locations;
}
