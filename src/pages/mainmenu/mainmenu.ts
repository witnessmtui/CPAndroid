import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IrformPage } from '../irform/irform';
import { IiformPage } from '../iiform/iiform';
import { IrviewPage } from '../irview/irview';
import { IiviewPage } from '../iiview/iiview';
import { EnrolPage } from '../enrol/enrol';
import { NotificationsPage } from '../notifications/notifications';

@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {
irPage = IrviewPage;
iiPage = IiviewPage;
irfrmPage = IrformPage;
iifrmPage = IiformPage;
enrlPage = EnrolPage;
ntficationsPage = NotificationsPage;
constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
onGoToIR(){
  	this.navCtrl.push(IrformPage);
  }
onGoToII(){
  	this.navCtrl.push(IiformPage);
  }
onGoToIRView(){
  this.navCtrl.push(this.irPage);
  }
onGoToIIView(){
  this.navCtrl.push(this.iiPage);
  }
onClickNotifications(){
  this.navCtrl.push(this.ntficationsPage);
  }
onClickEnroleCase(){
  this.navCtrl.push(this.enrlPage);
  }
onGoToMyIR(){
    this.navCtrl.popToRoot();
  }
onGoToMyII(){
    this.navCtrl.popToRoot();
  }
}