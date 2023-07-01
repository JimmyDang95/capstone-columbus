package de.jimmy.columbus.db;

import de.jimmy.columbus.model.Route;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface RoutesMongoDb extends PagingAndSortingRepository<Route, String> {

    List<Route> findAll();

}
