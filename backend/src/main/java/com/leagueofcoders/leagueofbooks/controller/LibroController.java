package com.leagueofcoders.leagueofbooks.controller;

import com.nttdata.backend.model.Autor;
import com.nttdata.backend.model.Libro;
import com.nttdata.backend.service.AutorService;
import com.nttdata.backend.service.LibroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "http://localhost:4200")
public class LibroController {

    private final LibroService libroService;
    private final AutorService autorService;

    public LibroController(LibroService libroService, AutorService autorService) {
        this.libroService = libroService;
        this.autorService = autorService;
    }

    @GetMapping
    public List<Libro> getAll() { return libroService.findAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<Libro> getById(@PathVariable Long id) {
        return libroService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Libro> create(@RequestBody Libro libro) {
        return autorService.findById(libro.getAutor().getId())
            .map(autor -> {
                libro.setAutor(autor);
                return ResponseEntity.ok(libroService.save(libro));
            })
            .orElse(ResponseEntity.badRequest().build());
    }
}
