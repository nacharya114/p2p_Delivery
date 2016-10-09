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
  idnum: number;
  public apiURL: string = "http://localhost:8080";

  constructor(private http: Http) {
      // this.orderList = [{
      //     id: 0,
      //     name : "Pete",
      //     location: "New York, NY",
      //     destination: "Chicago, IL",
      //     type: "s",
      //     notes: "notes",
      //     complete: false,
      //     description: "Lorem epsum",
      //     incoming: false
      // }, {
      //     id: 1,
      //     name: "Joe",
      //     location:"Atlanta, Georgia",
      //     destination:"Athens, Georgia",
      //     type:"m",
      //     notes:"",
      //     complete: true,
      //     description: "Joe's Bag of Donuts",
      //     incoming: false
      // }, {
      //   id: 2,
      //   name: "Mary",
      //   location: "North Ave Appt",
      //   destination: "711 Techwood Drive",
      //   type:"s",
      //   notes:"Her Rat Cap",
      //   complete:false,
      //   description:"Thanks Mary",
      //   incoming: true
      // }];
      //let idnum = 3;
      console.log(this.orderList);
  }

  getOrder() {
      return new Promise((resolve, reject) => {
          resolve();
      });
  }

  createOrder(form: JSON) {

      // return new Promise((resolve, reject) => {
      //     form['id'] = this.idnum;
      //     this.idnum++;
      //     this.orderList.push(form);
      //     console.log(this.orderList);
      //     resolve({status: 'OK'});
      // });
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log("Logs", JSON.stringify(form));
    return this.http.post(this.apiURL + "/api/orders", JSON.stringify(form),  options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

  getAllOrders() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
     return this.http.get(this.apiURL+"/api/orders", options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  getOrders(complete: boolean) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
      console.log(this.orderList);
      if(complete == undefined) {
      return this.http.get(this.apiURL+"/api/orders", options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }
      if (complete) {
        return this.http.get(this.apiURL+"/api/orders?complete=true", options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
      } else {
        return this.http.get(this.apiURL+"/api/orders?complete=false", options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
      }
  }

  getOutgoingOrders() {
    //     return new Promise((resolve, reject) => {
    //   this.getAllOrders().then(()=>{
    //     let templist: any = [];
    //       for (var i = this.orderList.length - 1; i >= 0; i--) {
    //         if(this.orderList[i]['incoming'] == false && this.orderList[i]['complete'] == false ){
    //           console.log("LOGSF", this.orderList[i]);
    //           templist.push(this.orderList[i]);
    //         }
    //       }
    //       resolve(templist);
    //     });
    // })
let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

   return this.http.get(this.apiURL+"/api/orders?incoming=false", options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  getCompletedOrders() {
      let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

   return this.http.get(this.apiURL+"/api/orders?complete=true", options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  getIncomingOrders() {
    // return new Promise((resolve, reject) => {
    //   this.getAllOrders().then(()=>{
    //     let templist: any = [];
    //       for (var i = this.orderList.length - 1; i >= 0; i--) {
    //         if(this.orderList[i]['incoming'] == true && this.orderList[i]['complete'] == false){
    //           console.log("LOGSF", this.orderList[i]);
    //           templist.push(this.orderList[i]);
    //         }
    //       }
    //       resolve(templist);
    //     });
    // })
  return this.http.get(this.apiURL+"/api/orders?incoming=true")
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  markOrderComplete(order: any) {
    return new Promise((resolve, reject) => {
        let i =this.orderList.indexOf(order);
        this.orderList[i]["complete"] = true;
        resolve();
    });
  }

  private extractData(res: Response) {
    console.log(res.json());
    return res.json();
    // let body = res.json();
    // console.log("WHATISTHIS", body.data);
    // return body.data || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Promise.reject(errMsg);
  }

}

