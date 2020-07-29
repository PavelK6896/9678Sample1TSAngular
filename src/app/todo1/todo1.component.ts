import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo1, Todo1Service} from "../shared/todo1.service";

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {

  // @Input() todo1: Todo1[] = [] //[]-поумолчанию
  // @Output() onToggle: EventEmitter<number> = new EventEmitter();
  //this.onToggle.emit(id) -- если пробрасывание через корень

  //инжектим сервисе
  constructor(public todo1Service: Todo1Service) { }

  ngOnInit(): void {
  }

  onChange(id: number) {
    // имеитем ид
    this.todo1Service.onToggle(id)
  }

  removeTodo(id: number) {
    this.todo1Service.removeTodo(id)
  }
}
