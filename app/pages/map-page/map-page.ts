import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, Page } from 'ionic-angular';
import { HistoryPagePage } from '../history-page/history-page';
import { Geolocation } from 'ionic-native';


/*
  Generated class for the MapPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var google;

@Page({
  templateUrl: 'build/pages/map-page/map-page.html',
})
export class MapPagePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private platform: Platform) {
    this.platform = platform;
    this.initializeMap();
  }

  ionViewLoaded(){
    console.log("loaded view");
    //this.loadMap();
  }

  initializeMap() {
    this.platform.ready().then(() => {
        var minZoomLevel = 12;


        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: minZoomLevel,
            center: new google.maps.LatLng(38.50, -90.50),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    });
  }

    /**
  loadMap(){

    Geolocation.getCurrentPosition().then((position) => {
      console.log(position);
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
        console.log(err);
    });

  }
  **/

}
