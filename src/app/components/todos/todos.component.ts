import { Component, OnInit } from '@angular/core';
import { Todo } from '../../class/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        task: 'make bed',
        completed: false
      },
      {
        task: 'pet cat',
        completed: false
      },
      {
        task: 'take out garbage',
        completed: false
      }
    ]

  }

}
