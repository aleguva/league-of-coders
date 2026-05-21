export interface Libro {
  id?: number;
  titulo: string;
  anio: number;
  autor: { id: number };
}