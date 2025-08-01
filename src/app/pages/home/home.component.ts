import { Component, inject } from '@angular/core';
import { Task, TaskService} from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, TaskListComponent],
  template: `
  <div class="container">
    <h1>Gestor de Tareas</h1>
    <app-task-form (create)="addTask($event)"></app-task-form>
    <app-task-list [tasks]="tasks" (toggleTask)="toggleTask($event)"></app-task-list>
    <p>Total de tareas: {{ tasks.length }}</p>
    </div>
  `
})
export class HomeComponent {
  
  taskService = inject(TaskService); 
    tasks: Task[] = this.taskService.getTasks();
  

  addTask(title: string): void {
    this.taskService.addTask(title);
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }
}