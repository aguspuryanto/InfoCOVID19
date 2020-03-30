import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  countryall: any;
  lastUpdate: any = new Date();
  
  constructor(public http: HttpClient) {
    this.getRemoteDataAll().subscribe(data => {
      this.countryall = (data);
    });
  }

  public getRemoteDataAll() {
    return this.http.get('https://api.kawalcorona.com/');
  }

}
