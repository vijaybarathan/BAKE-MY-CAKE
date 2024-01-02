import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  status: boolean = false;

  login() {
    this.status = true;
  }

  logout() {
    this.status = false;
  }

  getstatus() {
    return this.status;
  }
}
