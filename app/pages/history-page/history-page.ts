import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestDataProvider } from '../../providers/request-data-provider/request-data-provider';

/*
  Generated class for the HistoryPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/history-page/history-page.html',
})
export class HistoryPagePage {

  orderlist: any;
  packages: any;

  constructor(private navCtrl: NavController, private rdp: RequestDataProvider) {
    this.rdp.getCompletedOrders().then((data) => {
            this.orderlist = <Array<JSON>>data;
            console.log(this.orderlist);
        });
  }

  ionViewLoaded() {
    this.rdp.getCompletedOrders().then((data)=> {
      console.log(data);
      this.orderlist = data;
    });
  }

  ionViewWillEnter(){
        this.rdp.getCompletedOrders().then((data) => {
            this.orderlist = data;
        });

    }
}




