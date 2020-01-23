import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/class/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  @Output() deleted = new EventEmitter();

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
    this.deleted.emit()
  }
}
