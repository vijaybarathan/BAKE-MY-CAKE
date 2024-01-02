import { Component, OnInit } from '@angular/core';
import { products } from 'src/model/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})

export class LandingViewComponent implements OnInit {

  product: products[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getproducts().subscribe((data) => {
      this.product = data;
    },
      () => {
        alert("something went wrong while fetching data from the server")
      })
  }

  onSearch(searchText: string) {
    if (searchText === '') {
      this.product = this.product;
    }
    this.productService.getproducts().subscribe((data) => {
      this.product = data.filter(product => product.cakename.toLowerCase().includes(searchText.toLowerCase()))
    })
  }

  display(name: string) {
    this.productService.getproducts().subscribe((data) => {
      if (name == "ALL") {
        this.product = data;
      }
      else {
        this.product = data.filter(d => d.category.toLowerCase().includes(name.toLowerCase()))
      }
    })
  }
}
















