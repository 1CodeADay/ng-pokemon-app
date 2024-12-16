import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  IsLoggedIn: boolean = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    const IsLoggedIn = (name == 'pikachu' && password === 'pikachu');

    return of(IsLoggedIn).pipe(
      delay(1000),
      tap(IsLoggedIn => this.IsLoggedIn = IsLoggedIn)
    );
  }

  logout() {
    this.IsLoggedIn = false;
  }
}
