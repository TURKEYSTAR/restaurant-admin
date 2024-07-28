import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private validEmail = 'makyatraiteur@esmt.sn';
  private validPassword = 'passer';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === this.validEmail && password === this.validPassword) {
      this.isAuthenticated = true;
      this.router.navigate(['/makyatraiteur/admin']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
