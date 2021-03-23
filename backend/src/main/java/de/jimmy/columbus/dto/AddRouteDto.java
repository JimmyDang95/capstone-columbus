package de.jimmy.columbus.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddRouteDto {


    private String id;
    private String name;
    private String country;
    private String creatorUserName;
    private List<LocationDto> locations;
}
