package com.springboot.backend.ecristobale.usersapp.users_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.backend.ecristobale.usersapp.users_backend.entities.User;
import com.springboot.backend.ecristobale.usersapp.users_backend.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
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

    @Override
    @Transactional
    public User save(User user) {
        return this.userRepository.save(user);
    }

    @Override
    @Transactional
    public void deleteById(@NonNull Long userId) {
        this.userRepository.deleteById(userId);
    }

}
