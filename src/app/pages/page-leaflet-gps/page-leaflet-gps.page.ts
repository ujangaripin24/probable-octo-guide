import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-page-leaflet-gps',
  templateUrl: './page-leaflet-gps.page.html',
  styleUrls: ['./page-leaflet-gps.page.scss'],
})
export class PageLeafletGPSPage implements OnInit {
  map: L.Map;
  constructor() { }

  ngOnInit(){
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
 }
 
 setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {
    const {
       coords: { latitude, longitude },
    } = position;
 
    const  map = L.map('map').setView([latitude, longitude], 15);
 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
     } ).addTo(map);

    L.marker([latitude, longitude]).addTo(map);
 }

}
