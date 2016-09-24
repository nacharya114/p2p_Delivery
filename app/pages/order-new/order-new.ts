import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  @ViewChild("name") nameTxt: ElementRef;
  @ViewChild("location") locationTxt: ElementRef;
  @ViewChild("destination") destinationTxt: ElementRef;
  @ViewChild("notes") notesTxt: ElementRef;

  constructor(private navCtrl: NavController, navPar: NavParams) {

  }
  goToPackageType(){
    this.navCtrl.push(PackageTypePage);
  }

  Submit(){
      this.navCtrl.pop();
      //TODO: save information and somehow send to tracking
    }
}
