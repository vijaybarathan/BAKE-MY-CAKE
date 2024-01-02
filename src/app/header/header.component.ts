import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'BakeMyCake';
  
  constructor(public log:LoginService){}

  status(){
    this.log.logout();
  }

}
