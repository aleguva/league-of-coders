import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AutorService } from '../../services/autor';
import { Autor } from '../../models/autor.model';
import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-autor-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>{{ autor()?.nombre }}</h2>
    <p>{{ autor()?.nacionalidad }}</p>
    <h3>Libros</h3>
    <ul>
      @for (libro of libros(); track libro.id) {
        <li>{{ libro.titulo }} ({{ libro.anio }})</li>
      }
    </ul>
    <a routerLink="/autores">Volver</a>
  `
})
export class AutorDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private autorService = inject(AutorService);
  autor = signal<Autor | null>(null);
  libros = signal<Libro[]>([]);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.autorService.getById(id).subscribe(a => this.autor.set(a));
    this.autorService.getLibros(id).subscribe(l => this.libros.set(l));
  }
}