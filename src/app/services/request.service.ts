import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerrequest } from 'src/model/request';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url:string="http://localhost:3000/requests";

  constructor(private http:HttpClient) { }

  getAllRequests() : Observable<Array<customerrequest>> {
    return this.http.get<Array<customerrequest>>(`${this.url}`);
  }

  saveRequests(Customerrequest :customerrequest) : Observable<customerrequest> {
    return this.http.post<customerrequest>(`${this.url}`,Customerrequest)
  }
}

