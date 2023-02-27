import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-page-lirik-lagu',
  templateUrl: './page-lirik-lagu.page.html',
  styleUrls: ['./page-lirik-lagu.page.scss'],
})
export class PageLirikLaguPage implements OnInit {
  DataLaguHot: any;
  map: L.Map;
  constructor(private http: HttpClient, private loadingCtrl: LoadingController) { }

  ionViewDidEnter() {
    this.map = L.map('map').setView([-6.957761928333558, 107.60831075345683], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);
  }

  ngOnInit() {
    this.showLoading();

    axios.get(environment.baseUrlAPI + '/hot')
    .then(response => {
      this.DataLaguHot = response.data.data;
      console.log(this.DataLaguHot);
      this.dismissLoading();
    })
    .catch(error => {
      console.log(error);
    })
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Harap Tunggu...',
      spinner: 'circles',
    });

    await loading.present();
  }

  async dismissLoading() {
    await this.loadingCtrl.dismiss();
  }
}

