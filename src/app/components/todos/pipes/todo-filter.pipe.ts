import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "../../../models/todo.model";
import {FilterType} from "../../../types/filter-type.type";

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: FilterType): Todo[] {
    switch (filter) {
      case 'COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'ACTIVE':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
}
