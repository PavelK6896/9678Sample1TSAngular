import {Pipe, PipeTransform} from "@angular/core";
import {Todo1} from "./todo1.service";



@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform{
  transform(todo: Todo1[], search: string = ''): Todo1[] {

    if(!search.trim()){
      return todo
    }

    //фильтор если нашли совпадение
    return todo.filter(to => {
      //search  - строка из инпута
      //indexOf -1 если нечего не найдено
      return to.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }

}
