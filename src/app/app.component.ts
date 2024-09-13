import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ToDoEntryFormComponent } from './components/to-do-entry-form/to-do-entry-form.component';
import { TaskListWrapperComponent } from './components/task-list-wrapper/task-list-wrapper.component';
import { TaskInfoTagComponent } from './components/task-info-tag/task-info-tag.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskEmptyStateComponent } from './components/task-empty-state/task-empty-state.component';
import { TaskEmptyListComponent } from './components/task-empty-list/task-empty-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent,
    ToDoEntryFormComponent, 
    TaskListWrapperComponent, 
    TaskInfoTagComponent, 
    TaskListComponent, 
    TaskItemComponent, 
    TaskEmptyStateComponent, 
    TaskEmptyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'train';
}
