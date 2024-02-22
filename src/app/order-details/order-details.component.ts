import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardPoints } from '../model/reward-points';
import {MatTableModule} from '@angular/material/table';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer';
import { FormsModule } from '@angular/forms';
import { OrderDetailsService } from '../services/order-details.service';
import { OrderDetails } from '../model/order-details';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule,FormsModule, MatTableModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  orderDetails: OrderDetails[] =[];
  customers: Customer[] =[];
  columnsToDisplay: string[] = [ "orderId", "customerId", "orderDate","amount","rewardPoints"];
  selectedCustomerId:number=0;
  noOfMonths:number=3;
  
  constructor(private orderDetailsService : OrderDetailsService,
    private customerService : CustomerService) 
  { }
  
  ngOnInit() {
    this.getCustomers();
  }
  
  getCustomers()  {
    this.customerService.getCustomers().subscribe(
              (val) => {
                this.customers= val;
            },
            response => {
                console.log("Customers call in error", response);
            }
      );
  }

  customerOnChange(){
    this.getOrderDetails(this.selectedCustomerId, this.noOfMonths);
  }

  noOfMonthsChanged(){
    this.getOrderDetails(this.selectedCustomerId, this.noOfMonths);
  }

  getOrderDetails(customerId:number,noOfMonths:number)  {
    if(customerId){
      this.orderDetailsService.getOrderDetails(customerId,noOfMonths).subscribe(
        (val) => {
          this.orderDetails= val;
        },
        response => {
            console.log("OrderDetails call in error", response);
        },
        () =>{
          console.log("OrderDetails completed");
        }
      );
    }else{
      this.orderDetails= [];
    }
    
            
  }
}