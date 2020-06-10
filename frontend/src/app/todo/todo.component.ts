import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // showIndex: number = null;
  todos: Todo[] = [];

  constructor(private service: TodosService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  // delete(index: number): void {
  //   this.todos.splice(index, 1)
  // }

  // complete(index: number): void {
  //   this.todos[index].completed = true
  // }

  getAllItems(): void {
    this.service.getAllItems().subscribe(response => {
      this.todos = response;
      console.log(response)
    })
  }

  addTodo(form: NgForm): any {
    let todo = form.value;
    todo.completed = false;
    this.service.addTodo(todo).subscribe(() => {
      this.getAllItems();
      form.reset();
    })
  }

  deleteTodo(id: number): void {
    this.service.deleteTodo(id).subscribe(() => {
      this.getAllItems();
    })
  }

  updateTodo(todo: Todo): void {
    let updateTodo = todo;
    updateTodo.completed = true;
    this.service.updateTodo(todo.id, updateTodo).subscribe(() => {
      this.getAllItems();
      // this.showIndex = null;
    })
  }

}
