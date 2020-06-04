import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiURL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }
  getAllItems(): any {
    return this.http.get(`${this.apiURL}/todo`)
  }

  addTodo(todo: Todo): any {
    return this.http.post(`${this.apiURL}/todo`, todo)
  }

  deleteTodo(id: number): any {
    return this.http.delete(`${this.apiURL}/todo/${id}`)
  }

  updateTodo(id: number, todo: Todo): any {
    return this.http.put(`${this.apiURL}/todo/${id}`, todo)
  }

}
