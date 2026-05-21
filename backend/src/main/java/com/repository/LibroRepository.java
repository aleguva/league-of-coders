package com.repository;

import com.nttdata.backend.model.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface LibroRepository extends JpaRepository<Libro, Long> {
 List<Libro> findByAutorId(Long autorId);
}