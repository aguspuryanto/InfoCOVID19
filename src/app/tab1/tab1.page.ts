import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Http, HttpModule, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  countryall: any;
  countryid: any;  
  constructor(public http: HttpClient) {

    this.getRemoteData().subscribe(data => {
      console.log("countryid", data);
      this.countryid = data;
    });

    this.getRemoteDataAll().subscribe(data => {
      // console.log("countryall", data);
      this.countryall = (data);
    });
  }

  public getRemoteData() {
    return this.http.get('https://covid19.mathdro.id/api/countries/id');
  }

  public getRemoteDataAll() {
    return this.http.get('https://covid19.mathdro.id/api/daily/2-14-2020');
  }

}
