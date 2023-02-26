import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-kode-pos',
  templateUrl: './page-kode-pos.page.html',
  styleUrls: ['./page-kode-pos.page.scss'],
})
export class PageKodePosPage implements OnInit {
  DataPos: any;
  columns = [{ name: 'No' }, { name: 'kecamatan' }, { name: 'kelurahan' }, { name: 'kodepos' }];

  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.showLoading();

    axios
      .get(environment.baseURLPos + '/kota_kab/k69.json?print=pretty')
      .then((response) => {
        this.DataPos = response.data;
        console.log(this.DataPos);
        this.dismissLoading();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Wati..',
      spinner: 'circles',
    });

    await loading.present();
  }

  async dismissLoading() {
    await this.loadingCtrl.dismiss();
  }
}
