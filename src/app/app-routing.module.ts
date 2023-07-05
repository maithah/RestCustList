import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';


const routes: Routes = [
  {
    path: '',
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'customer',
        component:CustomerComponent
      },
      {
        path:'add-customer',
        component:AddCustomerComponent
      },
      {
        path:'edit-customer/:custId',
        component:EditCustomerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
