import {Injectable} from "@angular/core";

export interface Todo1 {
  id: number
  title: string
  completed: boolean
  date?: any // поле необезательно
}


// декоратьр для сервиса
@Injectable({providedIn: 'root'})
export class Todo1Service {

  public todo1: Todo1[] = [
    {id: 1, title: 'купить хлеб', completed: false, date: new Date()},
    {id: 2, title: 'купить масло', completed: true, date: new Date()},
    {id: 3, title: 'купить пиво', completed: false, date: new Date()},
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, debitis dolorum facilis neque quidem suscipit velit. Ab aliquid aspernatur consequatur corporis cumque delectus dignissimos, eveniet facilis hic illum incidunt laboriosam laudantium magnam natus neque nobis nostrum numquam obcaecati omnis pariatur perferendis quia, quod repellendus sequi similique sint totam vero?',
      completed: false,
      date: new Date()
    },
  ]


  onToggle(id: number) {// модифицируем стате
    const idx = this.todo1.findIndex(t=> t.id === id)
    this.todo1[idx].completed = !this.todo1[idx].completed
  }

  removeTodo(id: number) {
    this.todo1 = this.todo1.filter(t => t.id != id)
  }
}
