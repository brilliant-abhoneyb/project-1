import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskInterface } from '../interfaces/task.interface';
import { TaskPayloadInterface } from '../interfaces/task-payload.interface';
import {tasks} from '../utils/task.util';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  todos: TaskInterface[] = [];
  private todosSubject: BehaviorSubject<TaskInterface[]> = new BehaviorSubject<
  TaskInterface[]
  >(this.todos);
  public todo$ = this.todosSubject.asObservable();

  public completedTodos$: Observable<TaskInterface[]> = this.todo$.pipe(
    map((todos) => todos.filter((todo) => todo?.completed))
  );

  constructor() {}

  addTask(task: TaskPayloadInterface) {
    const newTask: TaskInterface = {
      id: this.todos.length + 1,
      ...task,
    };
    this.todos.push(newTask);
    this.todosSubject.next(this.todos);
  }

  toggleTask(id: number): void{
    const task = this.todos.find((task) => task.id === id);
    if (!task) return;
    this.updateTodo({...task, completed: !task.completed});
  }

  updateTodo(updatedTodo:TaskInterface): void{
    const todos = this.todosSubject.value.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    this.updateTodos(todos);
  }


  updateTodos(todos: TaskInterface[]): void{
    this.todos = todos;
    this.todosSubject.next(this.todos);
  }


  deleteTodo(id: number): void {
    const todos = this.todos.filter ((task) => task.id !== id);
    this.todos = todos;
    this.todosSubject.next(this.todos);
  }
}
