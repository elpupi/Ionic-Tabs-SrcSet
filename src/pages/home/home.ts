import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  img_url = "assets/imgs/logo.png";

  constructor(public navCtrl: NavController) {
  }

  img_load() {
    console.log("load");
    window.alert("LOAD FROM HOME TAB");
  }
}
