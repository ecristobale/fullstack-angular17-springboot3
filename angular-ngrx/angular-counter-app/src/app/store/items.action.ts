import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment', props<{add: number}>());
export const decrease = createAction('[Counter Component] Decrease');
export const reset = createAction('[Counter Component] Reset');