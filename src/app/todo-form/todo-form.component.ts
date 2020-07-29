import { Component, OnInit } from '@angular/core';
import {Todo1, Todo1Service} from "../shared/todo1.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string = '';

  constructor(private todo1Service: Todo1Service) {
  }

  ngOnInit() {
  }

  addTodo() {
    const todo: Todo1 = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }

    this.todo1Service.addTodo(todo)
    this.title = ''
  }

}
