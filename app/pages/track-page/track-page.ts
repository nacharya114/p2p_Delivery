import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestDataProvider } from '../../providers/request-data-provider/request-data-provider';

/*
  Generated class for the TrackPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/track-page/track-page.html',
})
export class TrackPagePage {

  orderlist: any;
  packages: any;

  constructor(private navCtrl: NavController, private rdp: RequestDataProvider) {
    this.packages = "";
    // this.orderlist = [{
    //       name : "Pete",
    //       location: "ass",
    //       destination: "hole",
    //       type: "s",
    //       notes: "notes",
    //       complete: false
    //   }];
  }

  ngOnInit(){
      this.rdp.getOrders(true).then((data) => {
          this.orderlist = data;
      });
       this.packages = "incoming";
  }

  // ionViewLoaded(){
  //     if (this.orderlist == null) {
  //         this.initOrderList();
  //     }
  // }

  // initOrderList() {
  //   this.rdp.getOrders(true).then((data) => {
  //       this.orderlist = data;
  //   });
  // }




}
