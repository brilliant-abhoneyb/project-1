import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoEntryFormComponent } from './to-do-entry-form.component';

describe('ToDoEntryFormComponent', () => {
  let component: ToDoEntryFormComponent;
  let fixture: ComponentFixture<ToDoEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoEntryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
