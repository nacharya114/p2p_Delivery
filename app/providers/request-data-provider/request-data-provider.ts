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
          location: "New York, NY",
          destination: "Chicago, IL",
          type: "s",
          notes: "notes",
          complete: false,
          description: "Lorem epsum"
      }, {
          name: "Joe",
          location:"Atlanta, Georgia",
          destination:"Athens, Georgia",
          type:"m",
          notes:"",
          complete: true,
          description: "Joe's Bag of Donuts"
      }];
      console.log(this.orderList);
  }

  getOrder() {
      return new Promise((resolve, reject) => {
          resolve();
      });
  }

  createOrder(form: JSON) {

      return new Promise((resolve, reject) => {
          this.orderList.push(form);
          console.log(this.orderList);
          resolve({status: 'OK'});
      });
  }

  getOrders(complete: boolean) {
      console.log(this.orderList);
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

