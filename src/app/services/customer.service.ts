import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/assets/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  custAPI:string=environment.custAPI+"customer/"
  getCustById: any;
  constructor(private http:HttpClient) { }

  getAllCustomer(){
    return this.http.get(this.custAPI);
  }

  addCustomer(body:any){
    return this.http.post(this.custAPI,body)
  }

  editCustomer(id:any,body:any){
    return this.http.put(`${this.custAPI}${id}`,body)
  }

  deleteCustomer(id:any){
  return  this.http.delete(`${this.custAPI}${id}`);
  }
}
