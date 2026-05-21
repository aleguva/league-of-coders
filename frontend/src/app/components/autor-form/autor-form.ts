import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AutorService } from '../../services/autor';

@Component({
  selector: 'app-autor-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './autor-form.html',
  styleUrl: './autor-form.css'
})
export class AutorFormComponent {
  private fb = inject(FormBuilder);
  private autorService = inject(AutorService);
  private router = inject(Router);

  form = this.fb.group({
    nombre: ['', Validators.required],
    nacionalidad: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.valid) {
      this.autorService.create(this.form.value as any).subscribe(() => {
        this.router.navigate(['/autores']);
      });
    }
  }
}
