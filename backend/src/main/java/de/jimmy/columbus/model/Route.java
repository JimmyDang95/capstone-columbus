package de.jimmy.columbus.model;


import de.jimmy.columbus.dto.LocationDto;
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
@Document(collection = "routes")
public class Route {
    @Id
    private String id;
    private String name;
    private String country;
    private String creatorUserName;
    private List<LocationDto> locations;
}
