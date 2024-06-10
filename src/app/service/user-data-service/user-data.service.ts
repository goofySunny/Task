import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  username : string = '';

  constructor() { }


  setUsername(username : string) {
    this.username = username;
    console.log(this.username);
  }

  getUsername() {
    return this.username;
  }

  isUserLoggedIn() {
    if (this.username == '') {
      return false;
    } else {
      return true
    }
  }
}
