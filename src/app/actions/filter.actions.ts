import {createAction, props} from "@ngrx/store";
import {FilterType} from "../types/filter-type.type";

export const filterActions = {
  setFilter: createAction(
    '[Filter] Set Filter',
    props<{ filter: FilterType }>()
  )
};
