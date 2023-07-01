package de.jimmy.columbus.service;

import de.jimmy.columbus.db.UserMongoDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserMongoDb userDb;

    @Autowired
    public UserService(UserMongoDb userDb){
        this.userDb = userDb;
    }



}
