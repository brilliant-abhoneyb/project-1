import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInterface } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  private readonly taskService: TaskService = inject (TaskService);
  @Input({required: true}) task: TaskInterface | undefined;

  completeTask(id?: number): void {
    if (!id) return;
    this.taskService.toggleTask(id);
  }

  deleteTask(id?: number): void {
    if (!id) return;
    this.taskService.deleteTodo(id);
  }
}
