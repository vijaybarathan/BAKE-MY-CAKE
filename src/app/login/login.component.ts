import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private log: LoginService, private route: Router) { }

  pass: string = '';

  valid() {
    if (this.pass == "vijay") {
      this.log.login();
      this.route.navigateByUrl("/table");
    }
    else {
      this.log.logout();
    }
  }
}

