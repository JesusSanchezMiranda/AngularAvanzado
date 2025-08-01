import { Injectable } from '@angular/core';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

@Injectable({ 
  providedIn: 'root' 
})

export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    const newTask: Task = { id: Date.now(), title, completed: false };
    this.tasks.push(newTask);
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }
}