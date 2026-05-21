package com.leagueofcoders.leagueofbooks.controller;

import com.nttdata.backend.model.Autor;
import com.nttdata.backend.model.Libro;
import com.nttdata.backend.service.AutorService;
import com.nttdata.backend.service.LibroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/autores")
@CrossOrigin(origins = "http://localhost:4200")
public class AutorController {

    private final AutorService autorService;
    private final LibroService libroService;

    public AutorController(AutorService autorService, LibroService libroService) {
        this.autorService = autorService;
        this.libroService = libroService;
    }

    @GetMapping
    public List<Autor> getAll() { return autorService.findAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<Autor> getById(@PathVariable Long id) {
        return autorService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Autor create(@RequestBody Autor autor) { return autorService.save(autor); }

    @GetMapping("/{id}/libros")
    public List<Libro> getLibros(@PathVariable Long id) {
        return libroService.findByAutorId(id);
    }
}
