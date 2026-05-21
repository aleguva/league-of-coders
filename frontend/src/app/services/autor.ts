import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor.model';
import { Libro } from '../models/libro.model';

@Injectable({ providedIn: 'root' })
export class AutorService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/api/autores';

  getAll(): Observable<Autor[]> { return this.http.get<Autor[]>(this.url); }
  getById(id: number): Observable<Autor> { return this.http.get<Autor>(`${this.url}/${id}`); }
  create(autor: Autor): Observable<Autor> { return this.http.post<Autor>(this.url, autor); }
  getLibros(id: number): Observable<Libro[]> { return this.http.get<Libro[]>(`${this.url}/${id}/libros`); }
}
