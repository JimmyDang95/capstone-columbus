package de.jimmy.columbus.db;

import de.jimmy.columbus.model.ColumbusUser;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserMongoDb extends PagingAndSortingRepository<ColumbusUser, String> {

    List<ColumbusUser> findAll();
}
