import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-lirik-lagu',
  templateUrl: './page-lirik-lagu.page.html',
  styleUrls: ['./page-lirik-lagu.page.scss'],
})
export class PageLirikLaguPage implements OnInit {
  DataLaguHot: any;

  constructor(private http:HttpClient ) { }

  ngOnInit() {
    axios.get(environment.baseUrlAPI + '/hot')
    .then(response => {
      this.DataLaguHot = response.data.data;
      console.log(this.DataLaguHot);
    })
    .catch(error => {
      console.log(error);
    })
  }

}
