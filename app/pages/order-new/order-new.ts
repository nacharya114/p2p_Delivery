import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PackageTypePage } from '../package-type/package-type';
import { AutocompletePage } from '../autocomplete/autocomplete';
import { RequestDataProvider } from '../../providers/request-data-provider/request-data-provider';
import { Params } from "../../providers/params/params";

/*
  Generated class for the OrderNewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var google;
@Component({
  templateUrl: 'build/pages/order-new/order-new.html',
})
export class OrderNewPage {

  formData: any;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController, private params: Params, private requestProvider: RequestDataProvider) {

    this.formData = {};
  }
  goToPackageType(){
    this.navCtrl.push(PackageTypePage);
  }

  ionViewLoaded() {
    this.initAddress();
    //console.log("Order loc: ", this.params.get("loc"));
  }

  ionViewWillEnter() {
    console.log("entering");
    this.initAddress();
  }

  initAddress(){
    this.formData.location = this.params.data["address"];
    this.formData.destination = this.params.data["destination"];
  }

  Submit(){
      this.navCtrl.pop();
      console.log("hi");
      //console.log(this.formData);
      this.formData['complete'] = false;
      this.formData['incoming'] = false;
      this.requestProvider.createOrder(this.formData);
      this.params.data.destination = "";
      //TODO: save information and somehow send to tracking

    }

    getFocus() {
      let modal = this.modalCtrl.create(AutocompletePage);
      modal.present().then(()=>{
        console.log("testing this shit");
       });
    }

    ngOnInit(){
      let destinationbar = (<HTMLElement>document.getElementById("destin"));
      let options = {
          types: ['geocode']
      }

      let autocomplete = new google.maps.places.Autocomplete(destinationbar, options);

      google.maps.event.addListener(autocomplete, 'place_changed', function() {

          let place = autocomplete.getPlace();
          let geometry = place.geometry;
          if ((geometry) != undefined) {

          console.log(place.name);

          console.log(geometry.location.lng());

          console.log(geometry.location.lat());

          }
      });
    }
}
