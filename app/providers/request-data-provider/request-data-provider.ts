import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the RequestDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RequestDataProvider {

  orderList: any;

  constructor(private http: Http) {
      this.orderList = [{
          name : "Pete",
          location: "ass",
          destination: "hole",
          type: "s",
          notes: "notes",
          complete: false
      }];
  }

  getOrder() {
      return new Promise((resolve, reject) => {
          resolve();
      });
  }

  createOrder(form: JSON) {
      console.log(form);
      return new Promise((resolve, reject) => {
          this.orderList.push(form);
          resolve({status: 'OK'});
      });
  }

  getOrders(complete: boolean) {
      if (!complete) {
          return new Promise((resolve, reject) => {
              resolve(this.orderList);
          });
      } else {
          return new Promise((resolve, reject) => {
              resolve(this.orderList);
          });
      }
  }

  getTrackingOrders() {
        return new Promise((resolve, reject)=> {
            this.getOrders(false).then((data) => {
                resolve(data);
            });
        });
  }

  getCompletedOrders() {
      return new Promise((resolve, reject)=> {
            this.getOrders(true).then((data) => {
                resolve(data);
            });
        });
  }

}

