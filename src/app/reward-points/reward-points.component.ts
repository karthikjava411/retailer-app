import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardPoints } from '../model/reward-points';
import { Observable } from 'rxjs';
import { ConstantUtil } from '../util/constant-util';
import { RewardPointsService } from '../services/reward-points.service';
import {MatTableModule} from '@angular/material/table';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reward-points',
  standalone: true,
  imports: [CommonModule,FormsModule, MatTableModule,MatFormFieldModule, MatSelectModule],
  templateUrl: './reward-points.component.html',
  styleUrl: './reward-points.component.css'
})
export class RewardPointsComponent {
  rewardPoints: RewardPoints[] =[];
  customers: Customer[] =[];
  columnsToDisplay: string[] = [ "month", "year", "rewards"];
  selectedCustomerId:number=0;
  
  constructor(private rewardPointsService : RewardPointsService,
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
    this.getRewardPoints(this.selectedCustomerId);
  }

  getRewardPoints(customerId:number)  {
    if(customerId){
      this.rewardPointsService.getRewardPoints(customerId).subscribe(
        (val) => {
          this.rewardPoints= val;
        },
        response => {
            console.log("RewardPoints call in error", response);
        },
        () =>{
          console.log("RewardPoints completed");
        }
      );
    }else{
      this.rewardPoints= [];
    }
    
            
  }
}
