import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutorService } from '../../services/autor';
import { Autor } from '../../models/autor.model';

@Component({
  selector: 'app-autor-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './autor-list.html',
  styleUrl: './autor-list.css'
})
export class AutorListComponent implements OnInit {
  private autorService = inject(AutorService);
  autores = signal<Autor[]>([]);

  ngOnInit() {
    this.autorService.getAll().subscribe(data => this.autores.set(data));
  }
}
