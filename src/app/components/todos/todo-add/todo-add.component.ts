import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state.interface";
import {todoActions} from "../../../actions/todo.actions";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  public textInput: FormControl<string | null>;

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', Validators.required);
  }

  public addTodo(): void {
    if (this.textInput.invalid || !this.textInput.value) {
      return;
    }
    this.store.dispatch(todoActions.createTodo({text: this.textInput.value}));
    this.textInput.reset();
  }
}
