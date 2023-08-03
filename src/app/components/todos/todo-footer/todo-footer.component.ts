import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state.interface";
import {FilterType} from "../../../types/filter-type.type";
import {filterActions} from "../../../actions/filter.actions";
import {todoActions} from "../../../actions/todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  public currentFilter: FilterType;
  public filters: FilterType[];
  public pendingTodos: number;

  constructor(private store: Store<AppState>) {
    this.currentFilter = 'ALL';
    this.filters = ['ALL', 'ACTIVE', 'COMPLETED'];
    this.pendingTodos = 0;
  }

  public ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingTodos = state.todos.filter(todo => !todo.completed).length;
    });
  }

  public selectFilter(selectedFilter: FilterType): void {
    this.store.dispatch(filterActions.setFilter({filter: selectedFilter}));
  }

  public deleteCompletedTodos(): void {
    this.store.dispatch(todoActions.deleteCompletedTodos());
  }
}
