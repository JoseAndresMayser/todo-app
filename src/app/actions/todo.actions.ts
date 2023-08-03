import {createAction, props} from "@ngrx/store";

export const todoActions = {
  createTodo: createAction(
    '[Todo] Create Todo',
    props<{ text: string }>()
  ),
  toggleTodo: createAction(
    '[Todo] Toggle Todo',
    props<{ id: number }>()
  ),
  editTodo: createAction(
    '[Todo] Edit Todo',
    props<{ id: number, text: string }>()
  ),
  deleteTodo: createAction(
    '[Todo] Delete Todo',
    props<{ id: number }>()
  ),
  toggleAllTodos: createAction(
    '[Todo] Toggle All Todos',
    props<{ completed: boolean }>()
  ),
  deleteCompletedTodos: createAction(
    '[Todo] Delete Completed Todos'
  )
};
