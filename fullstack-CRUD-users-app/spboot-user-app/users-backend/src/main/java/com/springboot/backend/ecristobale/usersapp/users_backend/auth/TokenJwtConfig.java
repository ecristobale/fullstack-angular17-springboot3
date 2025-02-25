package com.springboot.backend.ecristobale.usersapp.users_backend.auth;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;

public class TokenJwtConfig {

    public static final String CONTENT_TYPE_APP_JSON = "application/json";
    
    public static final String PREFIX_TOKEN_BEARER = "Bearer ";

    public static final String HEADER_AUTHORIZATION = "Authorization";

    public static final SecretKey SECRET_KEY = Jwts.SIG.HS256.key().build();
        
}
