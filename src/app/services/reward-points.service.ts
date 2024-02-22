import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { RewardPoints } from '../model/reward-points';
import { ConstantUtil } from '../util/constant-util';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RewardPointsService {
  
  constructor(private http:HttpClient) { }

  getRewardPoints(_customer:number) :Observable<RewardPoints[]> {
    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest'
    });

    return this.http
      .get<RewardPoints[]>(ConstantUtil.apiBaseUrl + "orderdetails/getCustomerRewards", 
        { 
          params: { "customerId": _customer } ,
          headers:headers
        }
      ).pipe(map(data => data));
  }

}
