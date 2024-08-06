package com.petshop.jdbcmysql.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.jdbcmysql.models.Pet;

@Repository
public class PetRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static class PetRowMapper implements RowMapper<Pet> {
        
        @Override
        public Pet mapRow(@SuppressWarnings("null") ResultSet rs, int rowNum) throws SQLException {
            Pet pet = new Pet();
            pet.setId(rs.getLong("id"));
            pet.setNome(rs.getString("nome"));
            pet.setEspecie(rs.getString("especie"));
            pet.setIdade(rs.getInt("idade"));
            return pet;
        }
    }

    public int save(Pet pet) {
        return jdbcTemplate.update("INSERT INTO pets (nome, especie, idade) VALUES (?, ?, ?)",
                pet.getNome(), pet.getEspecie(), pet.getIdade());
    }

    public List<Pet> findAll(){
        return jdbcTemplate.query("SELECT * FROM pets", new PetRowMapper());
    }

    public int deleteById(Long id) {
        return jdbcTemplate.update("DELETE FROM pets WHERE id = ?", id);
    }
}
