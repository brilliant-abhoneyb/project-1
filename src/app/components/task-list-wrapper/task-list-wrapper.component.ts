import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInfoTagComponent } from '../task-info-tag/task-info-tag.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskEmptyListComponent } from '../task-empty-list/task-empty-list.component';
import { TaskService } from '../../services/task.service';



@Component({
  selector: 'app-task-list-wrapper',
  standalone: true,
  imports: [
    CommonModule, 
    TaskInfoTagComponent, 
    TaskItemComponent, 
    TaskEmptyListComponent],
  templateUrl: './task-list-wrapper.component.html',
  styleUrl: './task-list-wrapper.component.css',
})

export class TaskListWrapperComponent {
  total: number = 0;
  completed: number = 0;

  taskService = inject(TaskService);
  todos$ = this.taskService.todo$;  

  $completed = this.todos$.subscribe((v) => (this.total = v.length));
  $total = this.taskService.completedTodos$.subscribe(
    (v) => (this.completed = v.length)
  );
}
