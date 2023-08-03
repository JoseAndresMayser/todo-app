import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state.interface";
import {todoActions} from "../../../actions/todo.actions";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  public allCompleted: boolean;

  constructor(private store: Store<AppState>) {
    this.allCompleted = false;
  }

  public toggleAll(): void {
    this.allCompleted = !this.allCompleted;
    this.store.dispatch(todoActions.toggleAllTodos({completed: this.allCompleted}));
  }
}
