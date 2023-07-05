import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})


export class AddCustomerComponent implements OnInit {

  genderValue: any[] = [
    'Male',
    'Female'
  ];

  customerForm!:FormGroup;
  constructor(private router: Router,
    private customerService:CustomerService) { }
  ngOnInit(): void {

    this.configurationForm();

  }

  configurationForm() {
    this.customerForm=new FormGroup({
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

  onBack() {
    this.router.navigateByUrl('/customer')
  }

  onSave() {
    const values=this.customerForm.value;

this.customerService.addCustomer(values).subscribe((response:any)=>{
  this.router.navigateByUrl('/customer')
})

  }

}

