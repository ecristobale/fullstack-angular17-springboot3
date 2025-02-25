package com.springboot.backend.ecristobale.usersapp.users_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.lang.NonNull;

import com.springboot.backend.ecristobale.usersapp.users_backend.entities.User;

public interface UserService {

    List<User> findAll();

    Page<User> findAll(Pageable pageable);

    Optional<User> findById(@NonNull Long userId);

    User save(User user);

    Optional<User> update(User user, Long userId);

    void deleteById(@NonNull Long userId);
}
