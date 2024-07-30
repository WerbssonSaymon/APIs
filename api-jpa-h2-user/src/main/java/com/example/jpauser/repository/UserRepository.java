package com.example.jpauser.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jpauser.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
