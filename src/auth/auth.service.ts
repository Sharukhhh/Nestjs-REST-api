import { Injectable } from "@nestjs/common";
import { DatabaseSerice } from "src/database/database.service";


@Injectable({})
export class AuthService{
    constructor(private  databaseService: DatabaseSerice){}
    signup() {
        return {message : 'Sign up successfully'};
    }

    login() {
        return {message : 'login successfully'};
    }
}