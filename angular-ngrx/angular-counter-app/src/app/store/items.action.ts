import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment');
export const decrease = createAction('[Counter Component] Decrease');
export const reset = createAction('[Counter Component] Reset');