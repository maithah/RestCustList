import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit{

    genderValue: any[] = [
    'Male',
    'Female'
  ];

  custEditForm!:FormGroup;
  constructor(private router:Router,
    private customerService:CustomerService,
    private route:ActivatedRoute){

  }
  ngOnInit(): void {

this.configCustEditForm();
    this.route.params.subscribe((paramValue:any)=>{
      //console.log(paramValue);

      const customer=paramValue.custId;
      this.fetchCustomerById(customer);

    })
  }


  configCustEditForm(){
    this.custEditForm=new FormGroup({
      id:new FormControl(),
      fullname:new FormControl(null,[Validators.required]),
      address:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      phone:new FormControl(null,[Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      age:new FormControl(null,[Validators.required]),
      tableno:new FormControl(null,[Validators.required]),
      totalcost:new FormControl(null,[Validators.required]),

    })
  }

  fetchCustomerById(custId:any){
    console.log(custId);

    this.customerService.getCustById(custId).subscribe((resp:any)=>{
      console.log(resp);

      Object.keys(resp).forEach(key=>{
        if(this.custEditForm.value.hasOwnProperty(key)){
          this.custEditForm.get(key)?.setValue(resp[key]);
        }
      },(error:HttpErrorResponse)=>{
        console.log("error =>",error);

      })

     this.custEditForm.get('fullname')?.setValue(resp.fullname);


      this.custEditForm=new FormGroup({
        fullname:new FormControl(resp.fullname,[Validators.required]),
      })
    })

  }
onBack(){
this.router.navigateByUrl('/customer')
}
onSave(){
  const id = this.custEditForm.value.id;
  console.log("jjj->",id);

  const values = this.custEditForm.value;

  this.customerService.editCustomer(id,values).subscribe((response:any)=>{
    this.onBack();
  })
}

}
