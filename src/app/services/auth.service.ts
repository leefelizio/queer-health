import { Injectable, inject } from "@angular/core";
import { Auth, user } from "@angular/fire/auth";
import { Observable, firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class IsAuthService {
    currentUser$ = user(this._auth);

    constructor(private readonly _auth: Auth){ }

    async isAuth() {
        const userCredential = await firstValueFrom(user(this._auth));
        console.log(userCredential);

        return userCredential ? true : false
    }

}