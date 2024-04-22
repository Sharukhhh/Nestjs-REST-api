import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')               //"auth" refers to prefix of routes in auth module
export class AuthController{
    constructor(private authService : AuthService) {}

    // Creating end points with decorators
    @Post('signup')   //route - '/auth/signup'
    signup() {
        return this.authService.signup()
    }

    @Post('login')    //route - '/auth/login'
    login() {
        return this.authService.login();
    }


}