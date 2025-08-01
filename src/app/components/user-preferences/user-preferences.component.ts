import { Component, signal, computed, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-preferences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class.dark-mode]="isDarkMode()">
      <h3>Preferencias de usuario</h3>
      <label>
        <input type="checkbox" [checked]="isDarkMode()" (change)="toggleTheme()" />
        Tema oscuro
      </label>
      <p>El tema actual es: <strong>{{ currentTheme() }}</strong></p>
    </div>
  `,
  styles: [`
    div {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-top: 1rem;
    }
    .dark-mode {
      background-color: #0c1528ff;
      color: #f1f1f1;
    }
  `]
})
export class UserPreferencesComponent {
 public isDarkMode = signal(false);

  @Output() themeChange = new EventEmitter<void>();

  currentTheme = computed(() => this.isDarkMode() ? 'Oscuro' : 'Claro');

  toggleTheme(): void{
    this.isDarkMode.update(value => !value);
    this.themeChange.emit(); 
  }
}
