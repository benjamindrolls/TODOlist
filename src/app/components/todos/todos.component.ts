import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../class/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todos:Todo[];
  @Input() task:string;
  @Input() completed:boolean;
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
      },
      {
        task: 'fold clothes',
        completed: false
      },
      {
        task: 'be awesome',
        completed: false
      }
    ]

  }

  deleteItem($event, index) {
    this.todos.splice(index, 1);
    this.todos = [...this.todos];
  }


  addItem(newItem) {
    this.todos = [...this.todos, {task: newItem, completed: false}]
  }
}
