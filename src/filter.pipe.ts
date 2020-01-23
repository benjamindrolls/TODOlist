import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './app/class/todos';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], term: string): any {
    
    const newTodos = todos.filter(todo => {
      if (term) {
        return todo.task.toLowerCase().includes(term.toLowerCase())
      } else {
        return true;
      }
    })
    return newTodos;
  }

}
