import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PackageTypePage } from '../package-type/package-type';
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
  formData: any;

  constructor(private navCtrl: NavController, private rdp: RequestDataProvider) {
    this.packages = "";
    this.rdp.getCompletedOrders().then((data) => {
      this.orderlist = data;
    });
  // this.formData = {
  //       name: "",
  //       location: "",
  //       destination: "",
  //       type: "",
  //       notes:""
  //     };
  }

  goToHistory(order: any) {
    this.rdp.markOrderComplete(this.orderlist.splice(this.orderlist.indexOf(order), 1)[0]);

  }

  ionViewWillEnter(){
      this.rdp.getTrackingOrders().then((data) => {
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
