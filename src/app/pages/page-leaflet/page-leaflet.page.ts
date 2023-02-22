import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-page-leaflet',
  templateUrl: './page-leaflet.page.html',
  styleUrls: ['./page-leaflet.page.scss'],
})
export class PageLeafletPage{
  map: L.Map;
  constructor() { }

  ionViewDidEnter() {
    this.map = L.map('map').setView([-6.957761928333558, 107.60831075345683], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);
  }

}
