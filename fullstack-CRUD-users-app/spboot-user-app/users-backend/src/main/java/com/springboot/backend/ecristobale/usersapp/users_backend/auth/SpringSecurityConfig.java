package com.springboot.backend.ecristobale.usersapp.users_backend.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SpringSecurityConfig {

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(authorize -> 
        authorize
        .requestMatchers(HttpMethod.GET, "/api/users", "/api/users/page/{page}").permitAll()
        .requestMatchers(HttpMethod.GET, "/api/users/{userId}").hasAnyRole("ADMIN", "USER")
        .requestMatchers(HttpMethod.POST, "/api/users").hasRole("ADMIN")
        .requestMatchers(HttpMethod.PUT, "/api/users/{userId}").hasRole("ADMIN")
        .requestMatchers(HttpMethod.DELETE, "/api/users/{userId}").hasRole("ADMIN")
        .anyRequest().authenticated()
        )
        .csrf(config -> config.disable())
        .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .build();
    }
}
