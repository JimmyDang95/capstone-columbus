package de.jimmy.columbus.db;

import de.jimmy.columbus.model.LocationList;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface LocationMongoDb extends PagingAndSortingRepository<LocationList, String> {
    List<LocationList> findAll();
}
