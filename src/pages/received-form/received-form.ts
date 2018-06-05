import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {IiformService} from "../../services/iiform";
import { Storage } from '@ionic/storage';
import { EnrolPage } from '../enrol/enrol';
import { ViewFormPage } from '../view-form/view-form';

/**
 * Generated class for the ReceivedFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-received-form',
  templateUrl: 'received-form.html',
})
export class ReceivedFormPage {

  public id :any = [];
  public myForms :any = [];

  constructor(public store:Storage, public http : Http,public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController) {
  }

  ionViewWillEnter(){
    this.store.get('user').then((val) => {
      this.id = val.data.user.id ;

      let     headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
              options  : any      = new RequestOptions({ headers: headers }),
              url      : any       = 'http://192.168.43.137:8000/api/receivedForms';

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
