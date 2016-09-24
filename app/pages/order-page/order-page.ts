import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderNewPage } from '../order-new/order-new';

/*
  Generated class for the OrderPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/order-page/order-page.html',
})
export class OrderPagePage {

  constructor(private navCtrl: NavController) {
    console.log("testing");
  }
  goToOrderNew(){
    this.navCtrl.push(OrderNewPage);
    console.log("works");
  }
}
