import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../../../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {timer} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state.interface";
import {todoActions} from "../../../actions/todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() public todo?: Todo;

  @ViewChild('textInputElement') public textInputElement?: ElementRef;

  public confirmationCheckbox?: FormControl<boolean | null>;
  public textInput?: FormControl<string | null>;
  public isEditing: boolean;

  constructor(private store: Store<AppState>) {
    this.isEditing = false;
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public switchToEditMode(): void {
    if (!this.todo || !this.textInput) {
      return;
    }
    this.isEditing = true;
    this.textInput.setValue(this.todo.text);
    timer(1)
      .subscribe(() => {
        this.textInputElement?.nativeElement.select();
      });
  }

  public delete(): void {
    if (!this.todo) {
      return;
    }
    this.store.dispatch(todoActions.deleteTodo({id: this.todo.id}));
  }

  public finishEditing(): void {
    this.isEditing = false;
    if (!this.todo || !this.textInput || this.textInput.invalid) {
      return;
    }
    const text: string | null = this.textInput.value;
    if (!text || text === this.todo.text) {
      return;
    }
    this.store.dispatch(
      todoActions.editTodo({
        id: this.todo.id,
        text
      })
    );
  }

  private _initialize(): void {
    if (!this.todo) {
      return;
    }
    this.confirmationCheckbox = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text);

    this.confirmationCheckbox.valueChanges
      .subscribe(() => {
        if (!this.todo) {
          return;
        }
        this.store.dispatch(todoActions.toggleTodo({id: this.todo.id}));
      });
  }
}
