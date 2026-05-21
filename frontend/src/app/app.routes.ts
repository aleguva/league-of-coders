import { Routes } from '@angular/router';
import { AutorListComponent } from './components/autor-list/autor-list';
import { AutorFormComponent } from './components/autor-form/autor-form';
import { AutorDetailComponent } from './components/autor-detail/autor-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'autores', pathMatch: 'full' },
  { path: 'autores', component: AutorListComponent },
  { path: 'autores/nuevo', component: AutorFormComponent },
  { path: 'autores/:id', component: AutorDetailComponent }
];