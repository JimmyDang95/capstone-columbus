package de.jimmy.columbus.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "user")

public class ColumbusUser {
    @Id
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String password;
}
