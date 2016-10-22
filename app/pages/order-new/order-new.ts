import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PackageTypePage } from '../package-type/package-type';
import { RequestDataProvider } from '../../providers/request-data-provider/request-data-provider';
import { Params } from "../../providers/params/params";

/*
  Generated class for the OrderNewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/order-new/order-new.html',
})

export class OrderNewPage {

  formData: any;

  constructor(private navCtrl: NavController, private params: Params, private requestProvider: RequestDataProvider) {

    this.formData = {};
  }
  goToPackageType(){
    this.navCtrl.push(PackageTypePage);
  }

  ionViewLoaded() {
    this.formData.location = this.params.data["address"];
    //console.log("Order loc: ", this.params.get("loc"));
  }

  Submit(){
      this.navCtrl.pop();
      console.log("hi");
      //console.log(this.formData);
      this.formData['complete'] = false;
      this.formData['incoming'] = false;
      this.requestProvider.createOrder(this.formData);
      //TODO: save information and somehow send to tracking

    }
}
