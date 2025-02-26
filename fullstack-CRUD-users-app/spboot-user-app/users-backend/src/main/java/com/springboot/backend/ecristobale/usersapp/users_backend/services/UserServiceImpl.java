package com.springboot.backend.ecristobale.usersapp.users_backend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.lang.NonNull;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.backend.ecristobale.usersapp.users_backend.entities.Role;
import com.springboot.backend.ecristobale.usersapp.users_backend.entities.User;
import com.springboot.backend.ecristobale.usersapp.users_backend.models.IUser;
import com.springboot.backend.ecristobale.usersapp.users_backend.models.UserRequest;
import com.springboot.backend.ecristobale.usersapp.users_backend.repositories.RoleRepository;
import com.springboot.backend.ecristobale.usersapp.users_backend.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;

    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository,
                            PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
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
        user.setRoles(getUserRoles(user));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return this.userRepository.save(user);
    }

    @Transactional
    @Override
    public Optional<User> update(UserRequest user, Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (!userOptional.isPresent()){
            return Optional.empty();
        }
        User userDB = userOptional.orElseThrow();
        userDB.setEmail(user.getEmail());
        userDB.setLastname(user.getLastname());
        userDB.setName(user.getName());
        userDB.setCreatedAt(user.getCreatedAt());
        userDB.setUsername(user.getUsername());

        userDB.setRoles(getUserRoles(user));

        return Optional.of(userRepository.save(userDB));
    }

    @Transactional
    @Override
    public void deleteById(@NonNull Long userId) {
        this.userRepository.deleteById(userId);
    }

    private List<Role> getUserRoles(IUser user) {
        List<Role> roles = new ArrayList<>();
        Optional<Role> optionalRoleUser = roleRepository.findByName("ROLE_USER");
        optionalRoleUser.ifPresent(roles::add); // same as: ifPresent(role -> roles.add(role));

        if (user.isAdmin()) {
            Optional<Role> optionalRoleAdmin = roleRepository.findByName("ROLE_ADMIN");
            optionalRoleAdmin.ifPresent(roles::add);
        }
        return roles;
    }

}
