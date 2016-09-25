import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


/*
  Generated class for the RequestDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RequestDataProvider {

  orderList: any;
  public apiURL: string = "http://0742fccb.ngrok.io";

  constructor(private http: Http) {
      this.orderList = [];
      console.log(this.orderList);
  }

  getOrder() {
      return new Promise((resolve, reject) => {

          resolve();
      });
  }

  createOrder(form: JSON) {

      // return new Promise((resolve, reject) => {
      //     this.orderList.push(form);
      //     console.log(this.orderList);
      //     resolve({status: 'OK'});
      // });
  let headers = new Headers({ 'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': "http://localhost:8100" });
  let options = new RequestOptions({ headers: headers });
  console.log("Logs", JSON.stringify(form));
  debugger;
    return this.http.post(this.apiURL + "/api/orders", JSON.stringify(form),  options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

  getOrders(complete: boolean) {
    if(complete == undefined) {
      return this.http.get(this.apiURL+"/api/orders")
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }
      if (complete) {
        return this.http.get(this.apiURL+"/api/orders?complete=true")
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
      } else {
        return this.http.get(this.apiURL+"/api/orders?complete=false")
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
      }
  }

  getTrackingOrders() {

  }

  getCompletedOrders() {
      return new Promise((resolve, reject)=> {
            this.getOrders(true).then((data) => {
                resolve(data);
            });
        });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Promise.reject(errMsg);
  }

}

