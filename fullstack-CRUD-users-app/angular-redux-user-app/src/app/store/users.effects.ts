import { inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { UserService } from "../services/user.service";
import { add, addSuccess, findAllPageable, load, setErrors } from "./users.actions";
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
            catchError(() => EMPTY)
        ))
        )
    );

    addUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(add),
            exhaustMap(action => this.service.create(action.userNew)
                .pipe(
                    map(userNew => addSuccess({userNew})),
                    catchError( error => (error.status === 400)? of(setErrors({errors: error.error})) : EMPTY
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

 
    constructor(){}
 
}