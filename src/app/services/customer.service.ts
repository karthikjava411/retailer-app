import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { RewardPoints } from '../model/reward-points';
import { ConstantUtil } from '../util/constant-util';
import {map} from 'rxjs/operators';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomers() :Observable<Customer[]> {
    return this.http
      .get<Customer[]>(ConstantUtil.apiBaseUrl + "customer/getAllCustomers").pipe(map(data => data));
  }
}
