import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-enrol',
  templateUrl: 'enrol.html',
})
export class EnrolPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
onClickSubmit(){
this.navCtrl.popToRoot();
}
}
