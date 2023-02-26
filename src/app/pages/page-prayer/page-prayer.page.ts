import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-prayer',
  templateUrl: './page-prayer.page.html',
  styleUrls: ['./page-prayer.page.scss'],
})
export class PagePrayerPage implements OnInit {
  DataDoaDoa: any;

  constructor(private http: HttpClient, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.showLoading();

    axios.get(environment.baseUrlPray + '/lakuapik/jadwalsholatorg/master/adzan/semarang/2019/12.json')
    .then(response => {
      this.DataDoaDoa = response.data;
      console.log(this.DataDoaDoa);
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