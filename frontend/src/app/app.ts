import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="header">
      <div class="header-inner">
        <a routerLink="/autores" class="logo">League of Books</a>
      </div>
    </header>
    <main class="main">
      <router-outlet />
    </main>
  `,
  styles: [`
    .header {
      background: #1e293b;
      border-bottom: 1px solid #334155;
      padding: 0 2rem;
      height: 56px;
      display: flex;
      align-items: center;
    }
    .header-inner { max-width: 860px; width: 100%; margin: 0 auto; }
    .logo {
      color: #f8fafc;
      font-size: 1.05rem;
      font-weight: 600;
      letter-spacing: 0.01em;
    }
    .main {
      max-width: 860px;
      margin: 2.5rem auto;
      padding: 0 2rem;
    }
  `]
})
export class App {}
