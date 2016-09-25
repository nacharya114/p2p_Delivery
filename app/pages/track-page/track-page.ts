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
  this.formData = {
        name: "",
        location: "",
        destination: "",
        type: "",
        notes:""
      };
  }

  goToHistory() { 
    this.formData.complete = false;
    this.rdp.createOrder(this.formData);
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
