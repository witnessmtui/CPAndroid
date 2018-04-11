import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { EnrolPage } from '../enrol/enrol';
@IonicPage()
@Component({
  selector: 'page-iiview',
  templateUrl: 'iiview.html',
})
export class IiviewPage {
enrolPage = EnrolPage;
constructor (private navCtrl: NavController){}
onClickEnrol(){
this.navCtrl.push(this.enrolPage);
}
}
