package de.jimmy.columbus.utils;

import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
public class TimestampUtils {
    public Instant generateTimestampInstant(){
        return Instant.ofEpochSecond(Instant.now().getEpochSecond());
    }
}
