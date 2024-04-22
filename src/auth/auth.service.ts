import { Injectable } from "@nestjs/common";


@Injectable({})
export class AuthService{

    signup() {
        return {message : 'Sign up successfully'};
    }

    login() {
        return {message : 'login successfully'};
    }
}