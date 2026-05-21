import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutorService } from '../../services/autor';
import { Autor } from '../../models/autor.model';

@Component({
  selector: 'app-autor-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Autores</h2>
    <a routerLink="/autores/nuevo">+ Añadir autor</a>
    <ul>
      @for (autor of autores(); track autor.id) {
        <li>
          <a [routerLink]="['/autores', autor.id]">{{ autor.nombre }}</a>
          — {{ autor.nacionalidad }}
        </li>
      }
    </ul>
  `
})
export class AutorListComponent implements OnInit {
  private autorService = inject(AutorService);
  autores = signal<Autor[]>([]);

  ngOnInit() {
    this.autorService.getAll().subscribe(data => this.autores.set(data));
  }
}