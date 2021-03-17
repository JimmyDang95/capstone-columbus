package de.jimmy.columbus.service;

import de.jimmy.columbus.db.UserMongoDb;
import de.jimmy.columbus.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserMongoDb userDb;

    @Autowired
    public UserService(UserMongoDb userDb){
        this.userDb = userDb;
    }



}
