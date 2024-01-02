import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  navigateToHomeView() {
    this.router.navigate([""]);
  }

  navigateCakeRequestsView() {
    this.router.navigate(["cake-requests"]);
  }

  navigateToLoginView() {
    this.router.navigate(["login"]);
  }
}

