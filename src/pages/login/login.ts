import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { MainmenuPage } from '../mainmenu/mainmenu';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
onGoToRegistration() {
	this.navCtrl.push(RegistrationPage);
}
onGoToMainmenu() {
	this.navCtrl.push(MainmenuPage);
}

}
