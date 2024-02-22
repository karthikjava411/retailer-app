import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantUtil } from '../util/constant-util';
import { OrderDetails } from '../model/order-details';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http:HttpClient) { }

  getOrderDetails(customerId:number, noOfMonths:number) :Observable<OrderDetails[]> {
    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });

    return this.http
      .get<OrderDetails[]>(ConstantUtil.apiBaseUrl + "orderdetails/getCustomerTransactionByPeriod", 
      { 
        params: { "customerId": customerId, "noOfMonths":noOfMonths },
        headers:headers
    }).pipe(map(data => data));
  }
}
