import { Injectable, inject } from "@angular/core";
import { Auth, signInAnonymously, user } from "@angular/fire/auth";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
// -- SAVE USERS IN DATABSE - IT IS POSSIBLE
// -- to do one more service database service
// -- save the users in database
// -- import it on this file auth.service.ts 

export class IsAuthService {
    currentUser$ = user(this._auth);
    signInAnonymously() {
      throw new Error('Method not implemented.');
    }
    // -- method - object paradigm that returns a Boolean
    // -- below auth example in localStorage
    // isAuth() {
    //     return Boolean(localStorage.getItem('isAuth'))
    // }

    // -- auth with Google auth all below
    constructor(private readonly _auth: Auth){}

    // -- to do - fix - signinAnonimously()
    // async signinAnonimously(){
    //     const auth = inject(Auth);
    //     const user = await signInAnonymously(this._auth);
    //     console.log('user', user);
        
    //     return user;
    // }

    async isAuth() {
        const userCredential = await firstValueFrom(user(this._auth));
        return userCredential ? true : false
    }

}