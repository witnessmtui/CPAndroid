import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  public register : FormGroup;
  public loading: any= [];

  constructor(public http : Http, private formBuilder: FormBuilder, public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.register = this.formBuilder.group({
    name: ['', Validators.required],
    registration_number: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    phone_number: ['', Validators.required],
    gender: ['', Validators.required],
    category: ['', Validators.required],
    repeat_pass: ['', Validators.required],
  });
  }

  regForm()
      {
         let
             name  : string   = this.register.controls["name"].value,
             phone_number    : string    = this.register.controls["phone_number"].value,
             registration_number     : string    = this.register.controls["registration_number"].value,
             category  : string   = this.register.controls["category"].value,
             email    : string    = this.register.controls["email"].value,
             gender    : string    = this.register.controls["gender"].value,
             password     : string    = this.register.controls["password"].value,
             repeat_pass     : string    = this.register.controls["repeat_pass"].value;
             this.showLoader();

             if (password === repeat_pass){
               let     headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
                       options  : any      = new RequestOptions({ headers: headers }),
                       url      : any       = 'http://192.168.43.137:8000/api/user',
                       body    : any        = {name:name,password:password,phone_number:phone_number,registration_number:registration_number,email:email,gender:gender,category:category};

                       this.http.post(url,body,options).map(res =>res.json())
                       .subscribe(
                        data =>  {
                          this.sendNotification("You are successfully create your account");
                          this.navCtrl.pop();
                        },

                      error => {
                        if (error.status === 422){
                       this.sendNotification("Email/Phone number already exist!!");
                        }
                        if (error.status === 0){
                       this.sendNotification("Please check your internet connections!!");
                        }
                        else {
                         this.sendNotification("Server is temporary not responding!!");
                          }
                      //   console.log(error);
                      });
                         this.loading.dismiss();
             }

             else {
               this.sendNotification('Password and Repeat Password do not match') ;
               this.loading.dismiss();
             }
           }

  showLoader(){
         this.loading = this.loadingCtrl.create({
             content: 'Registering...'
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

onGoToSubmitReg(){
this.navCtrl.popToRoot();
  }
}
