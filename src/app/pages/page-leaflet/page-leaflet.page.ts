import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-page-leaflet',
  templateUrl: './page-leaflet.page.html',
  styleUrls: ['./page-leaflet.page.scss'],
})
export class PageLeafletPage{
  map: L.Map;
  dataMarkers = [
    {namaKota: 'Bandung', latitude: -6.957761928333558, longitude: 107.60831075345683},
    {namaKota: 'Jakarta', latitude: -6.21462, longitude: 106.84513},
    {namaKota: 'Surabaya', latitude: -7.2575, longitude: 112.7521}
  ];

  constructor() { }

  ionViewDidEnter() {
    this.map = L.map('map').setView([-6.957761928333558, 107.60831075345683], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);
    this.dataMarkers.forEach(marker => {
      const dataMarker = L.marker([marker.latitude, marker.longitude]).addTo(this.map);
      dataMarker.bindPopup(marker.namaKota);
    });
  }
}
