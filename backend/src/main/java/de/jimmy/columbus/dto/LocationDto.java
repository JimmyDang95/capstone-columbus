package de.jimmy.columbus.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LocationDto {

    private String locationName;
    private double lat;
    private double lng;

    @SuppressWarnings("unchecked")
    @JsonProperty("location")
    private void unpackNested(Map<String,Object> location) {
        this.locationName = (String)location.get("locationName");
        this.lat = (double)location.get("lat");
        this.lng = (double)location.get("lng");
    }
}

