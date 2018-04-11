import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
constructor (private navCtrl: NavController){}
onGoToSubmitReg(){
this.navCtrl.popToRoot();
  }
}