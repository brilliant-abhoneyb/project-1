import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEmptyStateComponent } from './task-empty-state.component';

describe('TaskEmptyStateComponent', () => {
  let component: TaskEmptyStateComponent;
  let fixture: ComponentFixture<TaskEmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEmptyStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
