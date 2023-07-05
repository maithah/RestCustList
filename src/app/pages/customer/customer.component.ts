import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent implements OnInit {

  custList:any[]=[]
  constructor(private router:Router,
    private customerService:CustomerService){
  }
  ngOnInit(): void {

    this.fetchAllCustomer();
  }


  onAdd(){
    this.router.navigateByUrl('/add-customer')
  }

  onEdit(cust:any){
    this.router.navigateByUrl('/edit-customer/'+cust.id);
  }

  fetchAllCustomer(){
    this.customerService.getAllCustomer().subscribe((response:any)=>{
      console.log("data zangu =>",response);
      this.custList=response;

    })
  }

  onDelete(emp:any){

    this.customerService.deleteCustomer(emp.id).subscribe((response:any)=>{
      this.ngOnInit();
    })
  }

}
