package de.jimmy.columbus.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "routes")
public class Route {
    @Id
    private String name;
    private String country;
    private String creatorUserName;
    private Instant creationDate;
    private Instant timestamp;

    private List<Location> locations;
}
