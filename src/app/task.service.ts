import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task [] = [{
      id: 1,
      name: "Design Wireframe",
      description: "",
      isCompleted: false,
      dueDate: new Date("2026-01-05"),
      projectId: 1
  
    },
    { id: 2,
      name: "Develop Frontend",
      description: "",
      isCompleted: true,
      dueDate: new Date("2025-01-15"),
      projectId: 1
    },
    {
      id: 3,
      name: "Develop Backend",
      description: "",
      isCompleted: false,
      dueDate: new Date("2026-01-19"),
      projectId: 1
    }
  ];

  constructor() { }

  //getTasks
  getTasks(): Task[] {
    return this.tasks;
  }

  //addTasks
  addTask(task: Task) {
    this.tasks.push(task);
    return this.tasks;
  }

  //updateTask
  updateTask(newTask: Task) {
    const taskIndex = this.tasks.findIndex(task => task.id === newTask.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = newTask;
    }
    return this.tasks;
  }

  //deleteTask
  deleteTask(id: number) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
    return this.tasks;
  }
}
