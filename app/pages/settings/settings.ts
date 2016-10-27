import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { UserPage } from '../user/user';
import { RequestDataProvider } from '../../providers/request-data-provider/request-data-provider';
import { Params } from "../../providers/params/params";


/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {

  //formData: any;

  constructor(private navCtrl: NavController) { //, private params: Params, private requestProvider: RequestDataProvider
     //this.formData = {};
  }
  /*ionViewLoaded(){

  }*/
  goToPaymentNew(){
    this.navCtrl.push(PaymentPage);
    console.log("works");
  }
  goToUserNew(){
    this.navCtrl.push(UserPage);
    console.log("works");
  }


}
