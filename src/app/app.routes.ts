import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { RewardPointsComponent } from './reward-points/reward-points.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {"path":"",component:HomeComponent},
    {"path":"customer",component:CustomerComponent},
    {"path":"itemdetails",component:ItemDetailsComponent},
    {"path":"transactions",component:TransactionsComponent},
    {"path":"rewardpoints",component:RewardPointsComponent},
    {"path":"orderdetails",component:OrderDetailsComponent}
];
