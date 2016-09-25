import { Component } from '@angular/core';
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

  constructor(private navCtrl: NavController, private rdp: RequestDataProvider) {
    
  }




}
