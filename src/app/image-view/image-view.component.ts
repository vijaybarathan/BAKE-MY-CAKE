import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { RouterService } from '../services/router.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestService } from '../services/request.service';
import { products } from 'src/model/product';
import { customerrequest } from 'src/model/request';


@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent {
  
  submitStatus: boolean = false;
  
  products: any;
  
  Cake: products = {
    id: '',
    rating: 0,
    cakename: '',
    price: 0,
    category: '',
    details:""
  };

  Customerrequest:customerrequest= {};
  minDate: Date = new Date();
  maxDate: Date = new Date();

  constructor(private activatedRoute: ActivatedRoute,
    private product: ProductService,
    private requestservice: RequestService,
    private RouterService: RouterService,
    private snackBar: MatSnackBar) {
      this.minDate.setDate(this.minDate.getDate());
      this.maxDate.setDate(this.minDate.getDate()+15);
     }
    
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? "";
      this.product.getproductsbyid(id).subscribe((data: any) => {
        this.Cake = data
      })
    })
  }


  makeRequest() {
    if (this. Customerrequest.Name && this. Customerrequest.Email && this.Customerrequest.Phone && this.
Customerrequest.DateOfOrder && this.Customerrequest.quantity) {
      this.submitStatus = true;
      this. Customerrequest.price=this.Customerrequest.quantity*this.Cake.price;
      this.Customerrequest.name = this.Cake.cakename;
      this.requestservice.saveRequests(this.Customerrequest).subscribe({
        next: data => {
          this.snackBar.open("Request Submitted", "", {
            duration: 3000
          });
          this.RouterService.navigateToHomeView();
        },
        error: err => {
          alert(err);
        }
      })
    }
  }

  canexit() {
    if (this.submitStatus === false) {
      return confirm("Are you sure you want to leave");
    }
    else {
      return true;
    }
  }
}




