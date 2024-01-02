import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageViewComponent } from './image-view/image-view.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { TableComponent } from './table/table.component';
import { ActivateService } from './services/activate.service';
import { DeactivateService } from './services/deactivate.service';

const routes: Routes = [
  { path: "cake", component: LandingViewComponent },
  { path: "cake/:id", component: ImageViewComponent, canDeactivate: [DeactivateService] },
  { path: "login", component: LoginComponent },
  { path: "table", component: TableComponent, canActivate: [ActivateService] },
  { path: "", redirectTo: "/cake", pathMatch: "full" },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
