import {Todo} from "./models/todo.model";
import {FilterType} from "./types/filter-type.type";

export interface AppState {
  todos: Todo[];
  filter: FilterType;
}
