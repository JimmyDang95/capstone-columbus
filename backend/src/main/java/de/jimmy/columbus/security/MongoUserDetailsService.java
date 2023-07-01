package de.jimmy.columbus.security;

import de.jimmy.columbus.model.ColumbusUser;
import de.jimmy.columbus.db.UserMongoDb;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MongoUserDetailsService implements UserDetailsService {

    private final UserMongoDb userMongoDb;

    public MongoUserDetailsService(UserMongoDb userMongoDb){
        this.userMongoDb = userMongoDb;
    }

    @Override
    public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException{
        Optional<ColumbusUser> userById = userMongoDb.findById(username);
        if(userById.isEmpty()) {
            throw new UsernameNotFoundException("user not found");
        }
        return new User(username, userById.get().getPassword(), List.of());
    }
}
