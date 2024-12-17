import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    message: string = 'You are not logged in. pikachu/pikachu is the default login/password';
    name: string;
    password: string;
    auth: AuthService;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.auth = this.authService;
    }

    setMessage() {
        if(this.authService.isLoggedIn) {
        this.message = 'You are logged in !';
        }
        else {
        this.message = 'Incorrect name or password.';
        }
    }
    login(){
        this.message = 'Trying to log in ...';
        this.auth.login(this.name, this.password)
        .subscribe((isLoggedIn: boolean) => {
            this.setMessage();
            if(isLoggedIn) {
            this.router.navigate(['/pokemons']);
            }
            else {
            this.password = '';
            this.router.navigate(['/login']);
            }
        });
    }


    logout() {
        this.authService.logout();
        this.message = 'You are now logged out';
    }
}
