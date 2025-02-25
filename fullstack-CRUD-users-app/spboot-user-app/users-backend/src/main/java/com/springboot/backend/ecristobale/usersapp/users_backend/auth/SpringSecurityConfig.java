package com.springboot.backend.ecristobale.usersapp.users_backend.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.springboot.backend.ecristobale.usersapp.users_backend.auth.filter.JwtAuthenticationFilter;
import com.springboot.backend.ecristobale.usersapp.users_backend.auth.filter.JwtValidationFilter;

@Configuration
public class SpringSecurityConfig {

    @Autowired
    private AuthenticationConfiguration authenticationConfiguration;

    @Bean
    AuthenticationManager authenticationManager() throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

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
        .addFilter(new JwtAuthenticationFilter(authenticationManager()))
        .addFilter(new JwtValidationFilter(authenticationManager()))
        .csrf(config -> config.disable())
        .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .build();
    }
}
