import {ActionReducer, createReducer, on} from "@ngrx/store";
import {Todo} from "../models/todo.model";
import {todoActions} from "../actions/todo.actions";

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitán América')
];

export const todoReducer: ActionReducer<Todo[]> = createReducer(
  initialState,
  on(todoActions.createTodo, (state, {text}) => [...state, new Todo(text)]),
  on(todoActions.toggleTodo, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
  }),
  on(todoActions.editTodo, (state, {id, text}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        };
      }
      return todo;
    });
  }),
  on(todoActions.deleteTodo, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(todoActions.toggleAllTodos, (state, {completed}) => {
    return state.map(todo => {
      return {
        ...todo,
        completed
      };
    });
  }),
  on(todoActions.deleteCompletedTodos, state => state.filter(todo => !todo.completed))
);
