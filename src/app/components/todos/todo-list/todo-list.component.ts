import {Component, OnInit} from '@angular/core';
import {Todo} from "../../../models/todo.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state.interface";
import {FilterType} from "../../../types/filter-type.type";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];
  public currentFilter: FilterType;

  constructor(private store: Store<AppState>) {
    this.todos = [];
    this.currentFilter = 'ALL';
  }

  public ngOnInit(): void {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.currentFilter = state.filter;
    });
  }
}
