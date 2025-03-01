import { createAction, props } from "@ngrx/store";
import { User } from "../models/user";

export const load = createAction('load', props<{ page: number }>());

export const findAll = createAction('findAll', props<{ users: User[] }>());
export const setPaginator = createAction('setPaginator', props<{ paginator: any }>());
export const findAllPageable = createAction('findAllPageable', props<{ users: User[], paginator: any }>());
export const find = createAction('find', props<{userId: number}>());

export const add = createAction('add', props<{ userNew: User }>());
export const addSuccess = createAction('addSuccess', props<{ userNew: User }>());
export const update = createAction('update', props<{ userUpdated: User }>());
export const remove = createAction('remove', props<{ userId: number }>());

export const setErrors = createAction('setErrors', props<{ errors: any }>());