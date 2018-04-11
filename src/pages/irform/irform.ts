import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-irform',
  templateUrl: 'irform.html',
})
export class IrformPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
onClickSubmitIR(){
this.navCtrl.popToRoot();
}
}
