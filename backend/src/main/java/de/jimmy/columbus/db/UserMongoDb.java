package de.jimmy.columbus.db;

import de.jimmy.columbus.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserMongoDb extends PagingAndSortingRepository<User, String> {
}
