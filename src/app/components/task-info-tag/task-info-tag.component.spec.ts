import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInfoTagComponent } from './task-info-tag.component';

describe('TaskInfoTagComponent', () => {
  let component: TaskInfoTagComponent;
  let fixture: ComponentFixture<TaskInfoTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInfoTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInfoTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
