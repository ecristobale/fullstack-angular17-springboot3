import { inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { UserService } from "../services/user.service";
import { add, addSuccess, findAllPageable, load, remove, removeSuccess, setErrors, update, updateSuccess } from "./users.actions";
import { catchError, EMPTY, exhaustMap, map, of, tap } from "rxjs";
import { User } from "../models/user";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
 
@Injectable()
export class UsersEffects {
 
    private service = inject(UserService);
    private router = inject(Router);
    private actions$ = inject(Actions);
 
    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(load),
            exhaustMap(action => this.service.findAllPageable(action.page)
        .pipe(
            map(pageable => {
                const users = pageable.content as User[];
                const paginator = pageable;

                return findAllPageable({users, paginator})
            }),
            catchError((error) => of(error))
        ))
        )
    );

    addUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(add),
            exhaustMap(action => this.service.create(action.userNew)
                .pipe(
                    map(userNew => addSuccess({userNew})),
                    catchError( error => (error.status === 400)? of(setErrors({userForm: action.userNew, errors: error.error})) : of(error)
                    )
                ) 
            )
        )
    );

    updateUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(update),
            exhaustMap(action => this.service.update(action.userUpdated)
                .pipe(
                    map(userUpdated => updateSuccess({userUpdated})),
                    catchError( error => (error.status === 400)? of(setErrors({userForm: action.userUpdated, errors: error.error})) : of(error)
                    )
                ) 
            )
        )
    );

    addSuccessUser$ = createEffect(() => this.actions$.pipe(
        ofType(addSuccess),
        tap(() => {
            this.router.navigate(['/users']);
            
            Swal.fire({
            title: "Created!",
            text: "User was successfully created!",
            icon: "success"
            });
        })
    ), {dispatch: false});

    updateSuccessUser$ = createEffect(() => this.actions$.pipe(
        ofType(updateSuccess),
        tap(() => {
            this.router.navigate(['/users']);
            
            Swal.fire({
            title: "Updated!",
            text: "User was successfully updated!",
            icon: "success"
            });
        })
    ), {dispatch: false});

    removeUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(remove),
            exhaustMap(action => this.service.delete(action.userId)
                .pipe(
                    map(() => removeSuccess({userId: action.userId}))
                )
            )
        )
    );

    removeSuccessUser$ = createEffect(() => this.actions$.pipe(
        ofType(removeSuccess),
        tap(() => {
            this.router.navigate(['/users']);
            
            Swal.fire({
                title: "Removed!",
                text: "User has been successfully removed.",
                icon: "success"
            });
        })
    ), {dispatch: false});

 
    constructor(){}
 
}