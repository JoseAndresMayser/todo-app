import {ActionReducer, createReducer, on} from "@ngrx/store";
import {filterActions} from "../actions/filter.actions";
import {FilterType} from "../types/filter-type.type";

export const initialState: FilterType = 'ALL';

// @ts-ignore
export const filterReducer: ActionReducer<FilterType> = createReducer(
  initialState,
  // @ts-ignore
  on(filterActions.setFilter, (state, {filter}) => filter)
);
