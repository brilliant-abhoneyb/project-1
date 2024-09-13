import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-info-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-info-tag.component.html',
  styleUrl: './task-info-tag.component.css'
})
export class TaskInfoTagComponent {
  @Input({required: true}) isBoth: boolean = false;
  @Input({required: true}) total: number = 0;
  @Input() completed: number = 0;
}
