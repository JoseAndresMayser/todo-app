import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "../app-state.interface";
import {todoReducer} from "./todo.reducer";
import {filterReducer} from "./filter.reducer";

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
