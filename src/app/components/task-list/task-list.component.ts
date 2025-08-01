import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../services/task.service';



@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let task of tasks" [class.completed]="task.completed">
        <input type="checkbox" [checked]="task.completed" (change)="toggleTask.emit(task.id)" />
        {{ task.title }}
      </li>
    </ul>
  `
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() toggleTask = new EventEmitter<number>();
}