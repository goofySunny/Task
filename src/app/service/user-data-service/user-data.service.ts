import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  setUsername(username: string): void {
    if (this.isBrowser() && window.sessionStorage) {
      sessionStorage.setItem('username', username);
    }
  }

  getUsername(): string | null {
    if (this.isBrowser() && window.sessionStorage) {
      return sessionStorage.getItem('username');
    }
    return null;
  }

  isUserLoggedIn(): boolean {
    return this.getUsername() !== null;
  }

  logOut(): void {
    if (this.isBrowser() && window.sessionStorage) {
      sessionStorage.removeItem('username');
    }
  }
}