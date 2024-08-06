package com.petshop.jdbcmysql.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.jdbcmysql.models.Pet;
import com.petshop.jdbcmysql.repositories.PetRepository;

@Service
public class PetService {
    
    @Autowired
    private PetRepository petRepository;

    public List<Pet> findAll(){
        return petRepository.findAll();
    }

    public int save(Pet pet){
        return petRepository.save(pet);
    }

    public int deleteById(Long id){
        return petRepository.deleteById(id);
    }
}
