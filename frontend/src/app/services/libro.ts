import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro.model';

@Injectable({ providedIn: 'root' })
export class LibroService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/api/libros';

  getAll(): Observable<Libro[]> { return this.http.get<Libro[]>(this.url); }
  create(libro: Libro): Observable<Libro> { return this.http.post<Libro>(this.url, libro); }
}