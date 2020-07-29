import {Component, OnInit} from '@angular/core';
import {Todo1Service} from "../shared/todo1.service";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {

  // @Input() todo1: Todo1[] = [] //[]-поумолчанию
  // @Output() onToggle: EventEmitter<number> = new EventEmitter();
  //this.onToggle.emit(id) -- если пробрасывание через корень

  public loading: boolean = true

  //инжектим сервисе
  constructor(public todo1Service: Todo1Service) {
  }


  ngOnInit(): void {
    //промисываем стрим и выполняем подписавшись
    this.todo1Service.fetchTodo2()
      .pipe(delay(500))//rxjs set timeout
      .subscribe(() => {
      this.loading = false;
      console.log("eeeee")
      console.log(this.todo1Service.todo2)
    })
  }

  onChange(id: number) {
    // имеитем ид
    this.todo1Service.onToggle(id)
  }

  removeTodo(id: number) {
    this.todo1Service.removeTodo(id)
  }
}
