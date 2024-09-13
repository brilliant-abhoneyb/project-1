import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEmptyListComponent } from './task-empty-list.component';

describe('TaskEmptyListComponent', () => {
  let component: TaskEmptyListComponent;
  let fixture: ComponentFixture<TaskEmptyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEmptyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEmptyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
