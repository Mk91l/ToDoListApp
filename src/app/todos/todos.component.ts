import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Todo } from '../models/todo.model';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  showValidationErrors: boolean = false;
  sortByUpdatedDate: string = 'asc';

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      this.showValidationErrors = true;
    } else {
      console.log(new Todo(form.value.text));
      this.dataService.addTodo(new Todo(form.value.text));
      this.showValidationErrors = false;
      form.reset();
    }
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditTodoDialogComponent, { width: '700px', data: todo });
    dialogRef.afterClosed().subscribe((updatedTodo) => {
      if (updatedTodo) {
        this.dataService.updateTodo(updatedTodo, index);
      }
    })
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index);
  }

  sortTodoByUpdateDate() {
    this.sortByUpdatedDate = this.sortByUpdatedDate === 'asc' ? 'desc': 'asc' ;
  }

}
