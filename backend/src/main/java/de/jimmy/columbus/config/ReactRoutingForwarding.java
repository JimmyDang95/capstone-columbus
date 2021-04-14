package de.jimmy.columbus.config;

import org.springframework.web.bind.annotation.RequestMapping;

public class ReactRoutingForwarding {

    @RequestMapping(value = "/**/{path:[^\\.]*}")
    public String forwardToRoutUrl() {
        return "forward:/";
    }
}
