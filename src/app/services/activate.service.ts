import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivateService implements CanActivate {

  constructor(private login: LoginService, private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, 
   state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const activate = this.login.getstatus();

    if (activate === true) {
      return activate;
    }
    else {
      this.route.navigateByUrl("");
      return activate;
    }
  }
}
