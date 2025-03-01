import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import { findAll, findAllPageable, load, setPaginator } from "./users.actions";
import { catchError, EMPTY, exhaustMap, map, of } from "rxjs";
import { User } from "../models/user";

@Injectable()
export class UsersEffects {
  loadUsers$;
 
  constructor(private actions$: Actions, private userService: UserService) {
    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(load),
        exhaustMap((action) =>
          this.userService.findAllPageable(action.page).pipe(
            map((pageable) => {
              const users = pageable.content as User[];
              const paginator = pageable;
 
              return findAllPageable({ users, paginator });
            }),
            catchError((error) => of(error))
          )
        )
      )
    );
  }
}