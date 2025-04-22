import { Component } from '@angular/core';
import { Task } from '../../task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
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
  }]
}
