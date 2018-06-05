import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { EditFormPage } from '../edit-form/edit-form';
import { EnrolPage } from '../enrol/enrol';

@Component({
  selector: 'page-view-form',
  templateUrl: 'view-form.html',
})
export class ViewFormPage {
  public enrol : FormGroup;
  public loading: any= [];
  public id :any = [];
  public category : any ;
  public form :any = [];
  public swo :boolean = false ;

  constructor(public navParams:NavParams,public store:Storage,public http : Http, private formBuilder: FormBuilder, public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
  }
  ionViewWillEnter(){
    this.form = this.navParams.get('form');
    console.log(this.form);
    this.store.get('user').then((val) => {
      this.id = val.data.user.id ;
      this.category = val.data.user.category ;
      if (this.category == "swo") {
          this.swo = true ;
      }
    });
  }
  Enrol(){
    if (this.form.status == "Enrolled") {
this.sendNotification("Form is already enrolled");
    }
    else {
      this.navCtrl.push(EnrolPage,{form:this.form});
    }
  }
  edit(){
    if (this.form.status == "Enrolled") {
this.sendNotification("Form is already enrolled");
    }
    else {
      this.navCtrl.push(EditFormPage,{form:this.form});
    }
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
