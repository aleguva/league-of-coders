import { Autor } from './autor.model';

export interface Libro {
  id?: number;
  titulo: string;
  anio: number;
  sinopsis?: string;
  fechaSalida?: string;
  numeroPaginas?: number;
  genero?: string;
  autor: { id: number } | Autor;
}
