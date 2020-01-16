import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from 'src/app/class/todos';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

  
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle() {
    this.todo.completed = !this.todo.completed;
  }

  onDelete() {
  }
}
