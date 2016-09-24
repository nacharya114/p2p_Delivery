import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPagePage } from '../order-page/order-page';

/*
  Generated class for the HistoryPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/history-page/history-page.html',
})
export class HistoryPagePage {

  constructor(private navCtrl: NavController) {

  }

  itemTapped(event, item) {
    this.navCtrl.push(OrderPagePage, {
      item: item
    });
  }

}




