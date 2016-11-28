import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestDataProvider } from '../../providers/request-data-provider/request-data-provider';
import { Params } from "../../providers/params/params";
/*
  Generated class for the UserPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user/user.html',
})
export class UserPage {

	info: any;

  constructor(private navCtrl: NavController,private params: Params, private requestProvider: RequestDataProvider) {
  	this.info = {};
  }

  ionViewLoaded() {
  	// this.info.username = "Penis";
    // this.requestProvider.getUsername().then((data)=>{
    //   this.info = data;
    // });
  }

}
