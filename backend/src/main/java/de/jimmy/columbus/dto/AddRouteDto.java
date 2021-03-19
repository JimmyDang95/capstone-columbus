package de.jimmy.columbus.dto;


import de.jimmy.columbus.model.Location;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddRouteDto {

    private String name;
    private String country;
    private String creatorUserName;
    private LocalDate localDate;
    private LocalTime creationTime;

}
