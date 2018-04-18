import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { EnrolPage } from '../enrol/enrol';
import {Info} from "../../models/info";
import {IiformService} from "../../services/iiform";



@Component({
  selector: 'page-iiview',
  templateUrl: 'iiview.html',
})
export class IiviewPage {
enrolPage = EnrolPage;
listItems:Info[];

constructor (private navCtrl: NavController, private iiService: IiformService){}
onClickEnrol(){
this.navCtrl.push(this.enrolPage);
}

ionViewWillEnter(){
  	this.loadItems();

  }

   private loadItems(){
  	this.listItems = this.iiService.getItems();
  	
  }
 



}
