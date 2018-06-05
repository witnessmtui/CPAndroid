import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {IiformService} from "../../services/iiform";
import { Storage } from '@ionic/storage';
import { EnrolPage } from '../enrol/enrol';
import { ViewFormPage } from '../view-form/view-form';

@Component({
  selector: 'page-iiview',
  templateUrl: 'iiview.html',
})
export class IiviewPage {
  public id :any = [];
  public myForms :any = [];

  constructor(public store:Storage, public http : Http,public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController) {
  }

  ionViewWillEnter(){
    this.store.get('user').then((val) => {
      this.id = val.data.user.id ;

      let     headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
              options  : any      = new RequestOptions({ headers: headers }),
              url      : any       = 'http://192.168.43.137:8000/api/myForms/' + this.id;

              this.http.get(url,options).map(res =>res.json())
              .subscribe(
               data =>  {
                   this.myForms = data.myForms;
                   console.log(data);
               },

             error => {
               console.log(error);
               if (error.status === 404) {
                 this.sendNotification("Currently you dont have any form!!");
               }
               else{
                 this.sendNotification("Something went wrong!!");
               }

             });
    });
  }
ViewForm(forms){
this.navCtrl.push(ViewFormPage,{form:forms});
}
  sendNotification(message)  : void
     {
        let notification = this.toastCtrl.create({
            message       : message,
            duration      : 5000
        });
        notification.present();
     }
}
