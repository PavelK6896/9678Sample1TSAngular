import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

export interface Todo1 {
  id: number
  title: string
  completed: boolean
  date?: any // поле необезательно
}


// декоратьр для сервиса
@Injectable({providedIn: 'root'})
export class Todo1Service {

  public todo2: Todo1[] = []
  public todo3: Todo1[] = [
    {id: 1, title: 'купить хлеб', completed: false, date: new Date()},
    {id: 2, title: 'купить масло', completed: true, date: new Date()},
    {id: 3, title: 'купить пиво', completed: false, date: new Date()},
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, debitis dolorum facilis neque quidem suscipit velit. Ab aliquid aspernatur consequatur corporis cumque delectus dignissimos, eveniet facilis hic illum incidunt laboriosam laudantium magnam natus neque nobis nostrum numquam obcaecati omnis pariatur perferendis quia, quod repellendus sequi similique sint totam vero?',
      completed: false,
      date: new Date()
    },
    {id: 5, title: 'illo 1', completed: false, date: new Date()},
    {id: 6, title: 'illo 2', completed: false, date: new Date()},

  ]

  public todo1: Todo1[] = this.todo3


  constructor(private http: HttpClient) {
  }

  //тип стрима
  fetchTodo2(): Observable<Todo1[]> {
// возвращает рчдс стрим
    return this.http.get<Todo1[]>('https://jsonplaceholder.typicode.com/todos?_limit=15')
      // сохроняем результат
      .pipe(tap(t => this.todo2 = t))
  }


  onToggle(id: number) {// модифицируем стате
    const idx = this.todo1.findIndex(t => t.id === id)
    this.todo1[idx].completed = !this.todo1[idx].completed
  }

  removeTodo(id: number) {

    console.log("removeTodo", id)
    this.todo1 = this.todo1.filter(t => t.id != id)


  }

  addTodo(todo: Todo1) {
    this.todo1.push(todo)
  }


  tt: boolean = false
  todoChange() {
    if (this.tt) {
      this.todo1 = this.todo3
      this.tt = false
    }else {
      this.todo1 = this.todo2
      this.tt = true
    }
  }

}
