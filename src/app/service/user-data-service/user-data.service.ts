import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }


  setUsername(username : string) {
    sessionStorage.setItem("username", username);
  }

  getUsername() {
    return sessionStorage.getItem("username");
  }

  isUserLoggedIn() {
    if (sessionStorage.getItem("username")) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    sessionStorage.removeItem("username")
  }
}
