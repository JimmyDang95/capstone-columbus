package de.jimmy.columbus.db;

import de.jimmy.columbus.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserMongoDb extends PagingAndSortingRepository<User, String> {

    List<User> findAll();
}
