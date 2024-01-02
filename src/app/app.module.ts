import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { HeaderComponent } from './header/header.component';
import { ProductService } from './services/product.service';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CategoryComponent } from './category/category.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TableComponent } from './table/table.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LandingViewComponent,
    CategoryComponent,
    PagenotfoundComponent,
    LoginComponent,
    ImageViewComponent,
    TableComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,


  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
