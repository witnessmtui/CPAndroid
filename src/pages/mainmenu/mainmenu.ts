import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IrformPage } from '../irform/irform';
import { IiformPage } from '../iiform/iiform';
import { IiviewPage } from '../iiview/iiview';
import { EnrolPage } from '../enrol/enrol';
import { NotificationsPage } from '../notifications/notifications';
<<<<<<< HEAD
import { PopoverController } from "ionic-angular";
import {ViewOptionsPage} from "../mainmenu/view-options/view-options";
import { ReceivedFormPage } from '../received-form/received-form';
import { Storage } from '@ionic/storage';
=======
import { MyformsPage } from '../myforms/myforms';
>>>>>>> 920fd96833df0f6cdcbb32b7917d25c062a9c557

@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

iiPage = IiviewPage;
irfrmPage = IrformPage;
iifrmPage = IiformPage;
enrlPage = EnrolPage;
ntficationsPage = NotificationsPage;
<<<<<<< HEAD
public fillup :boolean = true ;
public filldown :boolean = false ;
public initial : boolean = true;
public viewup :boolean = true ;
public viewdown :boolean = false ;
public vform : boolean = true;
public categ : boolean = false ;
public category :any = [];
constructor(public store:Storage,public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {
  this.store.get('user').then((val) => {
    this.category = val.data.user.category ;
    if (this.category == "swo") {
        this.categ = true ;
    }
  });
=======
myfrmsPage = MyformsPage;
constructor(public navCtrl: NavController, public navParams: NavParams) {
>>>>>>> 920fd96833df0f6cdcbb32b7917d25c062a9c557
  }
onGoToIR(){
  	this.navCtrl.push(IrformPage);
  }
onGoToII(){
  	this.navCtrl.push(IiformPage);
  }
<<<<<<< HEAD

onGoToIIView(){
  this.navCtrl.push(this.iiPage);
  }
receivedForms(){
  this.navCtrl.push(ReceivedFormPage);
=======
onGoToIRView(){
  this.navCtrl.push(this.irPage);
  }

onClickNotifications(){
  this.navCtrl.push(this.ntficationsPage);
>>>>>>> 920fd96833df0f6cdcbb32b7917d25c062a9c557
  }
onClickEnroleCase(){
  this.navCtrl.push(this.enrlPage);
  }
onGoToMyIR(){
    this.navCtrl.popToRoot();
  }
onGoToMyII(){
     this.navCtrl.push(this.iiPage);
  }
onGoToForms(){
    this.navCtrl.push(this.myfrmsPage);
  }
  myForms(){
    this.navCtrl.push(IiviewPage);
  }
  closeInitial(){
    this.fillup = false ;
    this.filldown = true ;
    this.initial = false;
  }
  viewInitial(){
    this.fillup = true ;
    this.filldown = false ;
    this.initial = true;
  }
  view(){
    this.viewup = true ;
    this.viewdown = false ;
    this.vform = true
  }
  closeview(){
    this.viewup = false ;
    this.viewdown = true ;
    this.vform = false
  }
 onShowOptions(event: MouseEvent){
   const popover = this.popoverCtrl.create(ViewOptionsPage);
   popover.present({ev: event});

 }
}
