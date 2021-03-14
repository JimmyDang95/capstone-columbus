package de.jimmy.columbus.db;

import de.jimmy.columbus.model.RouteList;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface RoutesMongoDb extends PagingAndSortingRepository<RouteList, String> {
    List<RouteList> findAll();
}
