package com.petshop.jdbcmysql.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petshop.jdbcmysql.models.Pet;
import com.petshop.jdbcmysql.services.PetService;

@RestController
@RequestMapping("/api/pets")
public class PetController {
    
    @Autowired
    private PetService petService;

    @GetMapping
    public List<Pet> findAll(){
        return petService.findAll();
    }

    @PostMapping
    public int save(@RequestBody Pet pet) {
        return petService.save(pet);
    }

    @DeleteMapping("/{id}")
    public int deleteById(@PathVariable Long id) {
        return petService.deleteById(id);
    }
}
