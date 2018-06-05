import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-enrol',
  templateUrl: 'enrol.html',
})
export class EnrolPage {
  public enrol : FormGroup;
  public loading: any= [];
  public form :any = [];
  public category : any ;

  constructor(public navParams:NavParams,public store:Storage,public http : Http, private formBuilder: FormBuilder, public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.enrol = this.formBuilder.group({
    Organization_unit: ['', Validators.required],
    date_refferal: ['', Validators.required],
    source_refferal: ['', Validators.required],
    area_incidence: ['', Validators.required],
  });
  }
  ionViewWillEnter(){
    this.form = this.navParams.get('form');
    this.store.get('user').then((val) => {
      this.category = val.data.user.category ;
    });
  }
  enrolForm()
      {
         let
             Organization_unit  : string   = this.enrol.controls["Organization_unit"].value,
             area_incidence    : string    = this.enrol.controls["area_incidence"].value,
             date_refferal     : string    = this.enrol.controls["date_refferal"].value,
             source_refferal     : string    = this.enrol.controls["source_refferal"].value;

             this.showLoader();

               let     headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
                       options  : any      = new RequestOptions({ headers: headers }),
                       form    :any        = this.form ,
                       url      : any       = 'http://192.168.43.137:8000/api/initial/enrols',
                       body    : any        = {form:form,Organization_unit:Organization_unit,source_refferal:source_refferal,area_incidence:area_incidence,date_refferal:date_refferal,};

                       this.http.post(url,body,options).map(res =>res.json())
                       .subscribe(
                        data =>  {
                          console.log(data);
                          this.sendNotification("You are successfully enroll the form");
                          this.navCtrl.pop();
                        },

                      error => {
                        if (error.status === 401){
                       this.sendNotification("User does not exist!!");
                        }
                        if (error.status === 0){
                          this.sendNotification("Server is temporary not responding!!");
                        }
                        else {
                          this.sendNotification("Please check your internet connections!!");
                          }
                      //   console.log(error);
                      });
                         this.loading.dismiss();

           }

  showLoader(){
         this.loading = this.loadingCtrl.create({
             content: 'waiting...'
         });

         this.loading.present();
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
/*     let     headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
             options  : any      = new RequestOptions({ headers: headers }),
             url      : any       = 'http://192.168.43.137:8000/api/enrol/'+ this.form.id;

             this.http.get(url,options).map(res =>res.json())
             .subscribe(
              data =>  {
                  this.enrols = data.enrols;
                  console.log(data);
                  this.sendNotification("You have successfully enrol this form!");
              },

            error => {
              console.log(error);
              if (error.status === 404) {
                this.sendNotification("Currently formnot found!!");
              }
              else{
                this.sendNotification("Something went wrong!!");
              }

   });  */
