import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input [(ngModel)]="title" placeholder="Nueva tarea" />
    <button (click)="addTask()">Agregar</button>
  `
})
export class TaskFormComponent {
  title = '';

  @Output() create = new EventEmitter<string>();

  addTask(): void {
    if (this.title.trim()) {
      this.create.emit(this.title);
      this.title = '';
    }
  }
}