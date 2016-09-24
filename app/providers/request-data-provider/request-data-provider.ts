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

  constructor(private http: Http) {}

  saveOrder(id: number) {
      return new Promise((resolve, reject) => {
          resolve();
      });
  }

  getOrder(id: number) {
      return new Promise((resolve, reject) => {
          resolve();
      });
  }

  createOrder() {
      return new Promise((resolve, reject) => {
          resolve();
      });
  }

  getOrders(complete: boolean) {
     return new Promise((resolve, reject) => {
          resolve();
      });
  }

  getTrackingOrders() {
        return new Promise((resolve, reject) => {
          resolve();
      });
  }

  getCompletedOrders() {
      return new Promise((resolve, reject) => {
          resolve();
      });
  }

}

