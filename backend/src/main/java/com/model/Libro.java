package com.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Libro {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String titulo;
 private int anio;
 private String sinopsis;
 private String fechaSalida;
 private Integer numeroPaginas;
 private String genero;
 @ManyToOne
 @JoinColumn(name = "autor_id")
 @JsonIgnoreProperties("libros")
 private Autor autor;
 public Long getId() { return id; }
 public void setId(Long id) { this.id = id; }
 public String getTitulo() { return titulo; }
 public void setTitulo(String titulo) { this.titulo = titulo; }
 public int getAnio() { return anio; }
 public void setAnio(int anio) { this.anio = anio; }
 public String getSinopsis() { return sinopsis; }
 public void setSinopsis(String sinopsis) { this.sinopsis = sinopsis; }
 public String getFechaSalida() { return fechaSalida; }
 public void setFechaSalida(String f) { this.fechaSalida = f; }
 public Integer getNumeroPaginas() { return numeroPaginas; }
 public void setNumeroPaginas(Integer n) { this.numeroPaginas = n; }
 public String getGenero() { return genero; }
 public void setGenero(String genero) { this.genero = genero; }
 public Autor getAutor() { return autor; }
 public void setAutor(Autor autor) { this.autor = autor; }
}
