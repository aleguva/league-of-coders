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
  templateUrl: './autor-detail.html',
  styleUrl: './autor-detail.css'
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
