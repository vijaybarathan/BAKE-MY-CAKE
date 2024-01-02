import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from 'src/model/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = "http://localhost:3000/cakes";

  constructor(private http: HttpClient) { }

  getproducts(): Observable<products[]> {
    return this.http.get<products[]>(this.url);
  }

  getproductsbyid(id: any): Observable<products> {
    return this.http.get<products>(`${this.url}/${id}`);
  }
}
