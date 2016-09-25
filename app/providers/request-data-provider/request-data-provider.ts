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
  idnum: number;

  constructor(private http: Http) {
      this.orderList = [{
          id: 0,
          name : "Pete",
          location: "New York, NY",
          destination: "Chicago, IL",
          type: "s",
          notes: "notes",
          complete: false,
          description: "Lorem epsum",
          incoming: false
      }, {
          id: 1,
          name: "Joe",
          location:"Atlanta, Georgia",
          destination:"Athens, Georgia",
          type:"m",
          notes:"",
          complete: true,
          description: "Joe's Bag of Donuts",
          incoming: false
      }, {
        id: 2,
        name: "Mary",
        location: "North Ave Appt",
        destination: "711 Techwood Drive",
        type:"s",
        notes:"Her Rat Cap",
        complete:false,
        description:"Thanks Mary",
        incoming: true
      }];
      let idnum = 3;
      console.log(this.orderList);
  }

  getOrder() {
      return new Promise((resolve, reject) => {
          resolve();
      });
  }

  createOrder(form: JSON) {

      return new Promise((resolve, reject) => {
          form['id'] = this.idnum;
          this.idnum++;
          this.orderList.push(form);
          console.log(this.orderList);
          resolve({status: 'OK'});
      });
  }

  getAllOrders() {
    return new Promise((resolve, reject) => {
      resolve(this.orderList);
    });
  }

  getOrders(complete: boolean) {
      console.log(this.orderList);
      if (!complete) {
        console.log("here is false");
          return new Promise((resolve, reject) => {
              let templist: any = [];
              for (var i = this.orderList.length - 1; i >= 0; i--) {
                console.log(this.orderList[i]);
                if(this.orderList[i]['complete'] == false){
                  console.log("LOGST", this.orderList[i]);
                  templist.push(this.orderList[i]);
                }
              }
              resolve(templist);
          });
      } else {
        console.log("Here is true");
          return new Promise((resolve, reject) => {
              let templist: any = [];
              for (var i = this.orderList.length - 1; i >= 0; i--) {
                if(this.orderList[i]['complete'] == true ){
                  console.log("LOGSF", this.orderList[i]);
                  templist.push(this.orderList[i]);
                }
              }
              resolve(templist);
          });
      }
  }

  getOutgoingOrders() {
        return new Promise((resolve, reject) => {
      this.getAllOrders().then(()=>{
        let templist: any = [];
          for (var i = this.orderList.length - 1; i >= 0; i--) {
            if(this.orderList[i]['incoming'] == false && this.orderList[i]['complete'] == false ){
              console.log("LOGSF", this.orderList[i]);
              templist.push(this.orderList[i]);
            }
          }
          resolve(templist);
        });
    })
  }

  getCompletedOrders() {
      return new Promise((resolve, reject)=> {
            this.getOrders(true).then((data) => {
                resolve(data);
            });
        });
  }

  getIncomingOrders() {
    return new Promise((resolve, reject) => {
      this.getAllOrders().then(()=>{
        let templist: any = [];
          for (var i = this.orderList.length - 1; i >= 0; i--) {
            if(this.orderList[i]['incoming'] == true && this.orderList[i]['complete'] == false){
              console.log("LOGSF", this.orderList[i]);
              templist.push(this.orderList[i]);
            }
          }
          resolve(templist);
        });
    })
  }

  markOrderComplete(order: any) {
    return new Promise((resolve, reject) => {
        let i =this.orderList.indexOf(order);
        this.orderList[i]["complete"] = true;
        resolve();
    });
  }

}

