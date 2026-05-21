package com.leagueofcoders.leagueofbooks.service;

import com.model.Autor;
import com.repository.AutorRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AutorService {

    private final AutorRepository repository;

    public AutorService(AutorRepository repository) {
        this.repository = repository;
    }

    public List<Autor> findAll() { return repository.findAll(); }
    public Optional<Autor> findById(Long id) { return repository.findById(id); }
    public Autor save(Autor autor) { return repository.save(autor); }
}
