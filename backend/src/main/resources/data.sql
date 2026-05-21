INSERT INTO autor (nombre, nacionalidad) VALUES ('Gabriel García Márquez', 'Colombiana');
INSERT INTO autor (nombre, nacionalidad) VALUES ('Isabel Allende', 'Chilena');
INSERT INTO autor (nombre, nacionalidad) VALUES ('Jorge Luis Borges', 'Argentina');
INSERT INTO autor (nombre, nacionalidad) VALUES ('Mario Vargas Llosa', 'Peruana');
INSERT INTO autor (nombre, nacionalidad) VALUES ('Julio Cortázar', 'Argentina');
INSERT INTO autor (nombre, nacionalidad) VALUES ('Miguel de Cervantes', 'Española');
INSERT INTO autor (nombre, nacionalidad) VALUES ('Pablo Neruda', 'Chilena');

-- Gabriel García Márquez (id=1)
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Cien años de soledad', 1967, 'La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.', '05/06/1967', 471, 'Realismo mágico', 1);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('El amor en los tiempos del cólera', 1985, 'Una historia de amor que se desarrolla a lo largo de más de cincuenta años en una ciudad del Caribe.', '05/12/1985', 348, 'Romance', 1);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('El coronel no tiene quien le escriba', 1961, 'Un coronel retirado espera durante quince años una carta con su pensión de jubilación.', '01/01/1961', 90, 'Novela corta', 1);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Crónica de una muerte anunciada', 1981, 'La reconstrucción del asesinato de Santiago Nasar en un pueblo costeño de Colombia.', '01/01/1981', 116, 'Novela', 1);

-- Isabel Allende (id=2)
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('La casa de los espíritus', 1982, 'La saga de la familia Trueba a través de cuatro generaciones en Chile.', '01/01/1982', 433, 'Realismo mágico', 2);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Eva Luna', 1987, 'La historia de una mujer que usa el poder de contar historias para sobrevivir en Latinoamérica.', '01/01/1987', 307, 'Novela', 2);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Paula', 1994, 'Carta autobiográfica escrita por Allende a su hija Paula mientras esta yacía en coma.', '01/01/1994', 330, 'Autobiografía', 2);

-- Jorge Luis Borges (id=3)
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Ficciones', 1944, 'Colección de cuentos que exploran laberintos, espejos y la naturaleza de la realidad.', '01/01/1944', 174, 'Cuentos', 3);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('El Aleph', 1949, 'Cuentos fantásticos que incluyen el famoso relato sobre un punto que contiene todos los puntos del universo.', '01/01/1949', 203, 'Cuentos', 3);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('El libro de arena', 1975, 'Cuentos sobre objetos y situaciones infinitas e inexplicables.', '01/01/1975', 128, 'Cuentos', 3);

-- Mario Vargas Llosa (id=4)
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('La ciudad y los perros', 1963, 'La vida en un colegio militar de Lima y los conflictos entre sus cadetes.', '01/01/1963', 408, 'Novela', 4);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('La fiesta del Chivo', 2000, 'La dictadura de Trujillo en República Dominicana vista desde distintas perspectivas.', '01/01/2000', 517, 'Novela histórica', 4);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Pantaleón y las visitadoras', 1973, 'La historia de un oficial del ejército peruano encargado de organizar un servicio de prostitutas para las tropas.', '01/01/1973', 309, 'Novela', 4);

-- Julio Cortázar (id=5)
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Rayuela', 1963, 'Una novela experimental sobre Horacio Oliveira y su búsqueda existencial entre París y Buenos Aires.', '28/06/1963', 635, 'Novela experimental', 5);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Bestiario', 1951, 'Ocho cuentos fantásticos donde lo sobrenatural convive con lo cotidiano.', '01/01/1951', 162, 'Cuentos', 5);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Final del juego', 1956, 'Cuentos que mezclan lo real y lo fantástico en situaciones cotidianas.', '01/01/1956', 203, 'Cuentos', 5);

-- Miguel de Cervantes (id=6)
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Don Quijote de la Mancha', 1605, 'Las aventuras de Alonso Quijano, un hidalgo que enloquece leyendo libros de caballerías.', '16/01/1605', 863, 'Novela', 6);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Novelas ejemplares', 1613, 'Doce novelas cortas que abarcan desde la picaresca hasta el romanticismo.', '01/07/1613', 424, 'Novela corta', 6);

-- Pablo Neruda (id=7)
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Veinte poemas de amor y una canción desesperada', 1924, 'Poemario que mezcla el amor romántico con la naturaleza del sur de Chile.', '01/07/1924', 80, 'Poesía', 7);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Canto general', 1950, 'Epopeya poética sobre la historia y la naturaleza de América Latina.', '03/04/1950', 507, 'Poesía', 7);
INSERT INTO libro (titulo, anio, sinopsis, fechaSalida, numeroPaginas, genero, autor_id) VALUES ('Residencia en la tierra', 1933, 'Poemario surrealista escrito durante su etapa como cónsul en Asia.', '01/01/1933', 196, 'Poesía', 7);
