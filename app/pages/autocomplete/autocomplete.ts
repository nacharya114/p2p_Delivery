import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Params } from "../../providers/params/params";

/*
  Generated class for the AutocompletePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var google;
@Component({
  templateUrl: 'build/pages/autocomplete/autocomplete.html',
})
export class AutocompletePage {

   private showList: boolean;
   result : String;
   items : any;
   service : any;

  constructor(private navCtrl: NavController, private params: Params) {
      this.showList = false;
      this.result = "";
      this.service = new google.maps.places.AutocompleteService();
  }

  initializeItems() {
    this.items = [
    ];
  }

  pickDestination(item) {
      this.result = item.description;
      this.showList = false;
      this.params.data.destination = this.result;
      this.navCtrl.pop();
  }

  getItems(ev) {
    // Show the results
    this.showList = true;

    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      let request ={
        input: val
      };
      this.service.getPlacePredictions(request, (results, status)=>{
        console.log("status: ", status);
        console.log("Results: ", results);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          this.items = results;
          // for (let r of results) {
          //   this.items.push(r["description"]);
          // }
                // this.items = this.items.filter((item) => {
                //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
                // });
        }
      });
      // this.items = this.items.filter((item) => {
      //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // });
    }
  }

  onCancel(ev) {
    // Show the results
    this.showList = false;

    // Reset the field
    ev.target.value = '';
  }

}
