import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { UserService } from "../services/user.service";

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions,
        private service: UserService) {}
}