import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('this is a test!', false)
  ];

  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(updatedTodo: Todo, index: number) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index:number) {
    this.todos.splice(index,1);
  }
}
