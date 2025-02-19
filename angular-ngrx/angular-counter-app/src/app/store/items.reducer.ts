import { createReducer, on } from "@ngrx/store";
import { decrease, increment, reset } from "./items.action";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, {add}) => state + add),
    on(decrease, (state) => state -1),
    on(reset, (state) => 0) 
);
