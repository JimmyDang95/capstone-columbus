package de.jimmy.columbus.model;


import com.fasterxml.jackson.annotation.JsonTypeId;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class User {

    private String userName;
    private String firstName;
    private String lastName;
    private String userAvatar;

}
