import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { ConnectivityService } from '../../providers/connectivity-service/connectivity-service';
import { OrderNewPage } from "../order-new/order-new";
import { Params } from "../../providers/params/params";


/*
  Generated class for the MapPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var google;


@Component({
  templateUrl: 'build/pages/map-page/map-page.html',
})
export class MapPagePage {

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  location: any;
  directionsDisplay : any;
  directionsService : any;

  constructor(public navCtrl: NavController, private connectivityService: ConnectivityService, private params: Params) {
    this.loadMap();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
  }

  ionViewLoaded(){
    console.log("loaded view");
    this.loadMap();
  }



  loadMap() {

    this.addConnectivityListeners();

    if(typeof google == "undefined" || typeof google.maps == "undefined"){

      console.log("Google maps JavaScript needs to be loaded.");
      this.disableMap();

      if(this.connectivityService.isOnline()){
        console.log("online, loading map");

        //Load the SDK
        window['mapInit'] = () => {
          this.initMap();
          this.enableMap();
        }

        let script = document.createElement("script");
        script.id = "googleMaps";

        if(this.apiKey){
          script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
        } else {
          script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
        }

        document.body.appendChild(script);

      }
    } else {

    if(this.connectivityService.isOnline()){
      console.log("showing map");
      this.initMap();
      this.enableMap();
    }
    else {
      console.log("disabling map");
      this.disableMap();
    }

  }
  }

  initMap() {

    this.mapInitialised = true;
    Geolocation.getCurrentPosition().then((position) => {
      console.log(position);
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
        console.log(err);
    });

  }

  disableMap(){
    console.log("disable map");
  }

  enableMap(){
    console.log("enable map");
  }

  addConnectivityListeners(){
    var me = this;

    var onOnline = () => {
      setTimeout(() => {
        if(typeof google == "undefined" || typeof google.maps == "undefined"){
          this.loadMap();
        } else {
          if(!this.mapInitialised){
            this.initMap();
          }

          this.enableMap();
        }
      }, 2000);
    };

    var onOffline = () => {
      this.disableMap();
    };

    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);

  }

  getCurrentLocation(){
    Geolocation.getCurrentPosition().then((position) => {
      console.log(position);
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var chicago = new google.maps.LatLng(37.334818, -121.884886);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }


      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      //this.addMarker(latLng);


    this.directionsDisplay.setMap(this.map);
    //this.calcRoute(this.directionsDisplay, this.map);

    }, (err) => {
        console.log(err);
    });


  }

  calcRoute(dd, map, start){
    // var start = new google.maps.LatLng(37.334818, -121.884886);
    var end = new google.maps.LatLng(37.441883, -122.143019);
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };

    let geocoder = new google.maps.Geocoder();
    let ctrl = this.navCtrl;
    geocoder.geocode({'latLng': end}, function(results, status) {
      console.log(status);
      if(status == google.maps.GeocoderStatus.OK) {
        let latlngDestination = results[0].geometry.location;
      }
    });

    this.directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        console.log(response);
        dd.setMap(map);
        dd.setDirections(response);
        this.directionsDisplay.setMap(this.map);
        console.log("Should show route");
      } else {
        alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
      }
    });

    /************** END OF ROUTE STUFF *****************/
  }

  addMarker(latlng){

    console.log("adding marker");

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latlng
    });

    let content = "<h4>Information!</h4>";

   this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }


  passLocation() {
    let geocoder = new google.maps.Geocoder();
    let location = new google.maps.LatLng(this.map.getCenter().lat(), this.map.getCenter().lng());
    this.addMarker(location);
    this.calcRoute(this.directionsDisplay,this.map,location);
    console.log(location.lat());
    let par = this.params;
    let ctrl = this.navCtrl;
    let map = this.map;
    geocoder.geocode({'latLng': location}, function(results, status) {
      console.log(status);
      if(status == google.maps.GeocoderStatus.OK) {
        console.log(results[0]);
        par.data = {
          "loc" : map.getCenter(),
          "address": results[0]["formatted_address"]
        }
        ctrl.push(OrderNewPage);
      }
    });

  }

}



