import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, UserPreferencesComponent],
  template: `
    <div [class.dark-mode]="isDarkMode()">
      <app-user-preferences (themeChange)="toggleTheme()"></app-user-preferences>
      <app-home></app-home>
    </div>
  `,
  styles: [`
    .dark-mode {
      background-color: #0c1528ff;
      color: #f1f1f1;
    }
  `]
})
export class AppComponent {
  title = 'Tareas';

  public isDarkMode = signal(false);

  toggleTheme(): void {
    this.isDarkMode.update(v => !v);
  }
}
