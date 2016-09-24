import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PackageTypePage } from '../package-type/package-type';

/*
  Generated class for the OrderNewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/order-new/order-new.html',
})
export class OrderNewPage {

  constructor(private navCtrl: NavController) {

  }
  goToPackageType(){
    this.navCtrl.push(PackageTypePage);
  }
}
