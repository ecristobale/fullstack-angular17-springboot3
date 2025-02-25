package com.springboot.backend.ecristobale.usersapp.users_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.backend.ecristobale.usersapp.users_backend.entities.User;
import com.springboot.backend.ecristobale.usersapp.users_backend.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List<User>) this.userRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<User> findAll(Pageable pageable) {
        return this.userRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(@NonNull Long userId) {
        return this.userRepository.findById(userId);
    }

    @Transactional
    @Override
    public User save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return this.userRepository.save(user);
    }

    @Transactional
    @Override
    public Optional<User> update(User user, Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (!userOptional.isPresent()){
            return Optional.empty();
        }
        User userDB = userOptional.orElseThrow();
        userDB.setEmail(user.getEmail());
        userDB.setId(user.getId());
        userDB.setLastname(user.getLastname());
        userDB.setName(user.getName());
        userDB.setCreatedAt(user.getCreatedAt());
        userDB.setUsername(user.getUsername());
        return Optional.of(userRepository.save(userDB));
    }

    @Transactional
    @Override
    public void deleteById(@NonNull Long userId) {
        this.userRepository.deleteById(userId);
    }

}
