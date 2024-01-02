import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ImageViewComponent } from '../image-view/image-view.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactivateService implements CanDeactivate<ImageViewComponent>{

  constructor() { }
  
  canDeactivate(
    component: ImageViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canexit();
  }
}
