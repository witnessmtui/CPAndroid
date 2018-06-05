import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {IiformService} from "../../services/iiform";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-iiform',
  templateUrl: 'iiform.html',
})
export class IiformPage {
	selectOptions = ['Police Involvement','Medical Examination'];

  public investigation : FormGroup;
  public loading: any= [];
  public id :any = [];
  public category : any ;

  constructor(public store:Storage,public http : Http, private formBuilder: FormBuilder, public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.investigation = this.formBuilder.group({
    childName: ['', Validators.required],
    contactNumber: ['', Validators.required],
    source_info: ['', Validators.required],
    challenges_faced: ['', Validators.required],
    emergency_action: ['', Validators.required],
    cause_concern: ['', Validators.required],
    risk_assessment: ['', Validators.required],
    outcome_investigation: ['', Validators.required],
    comments_swo: ['', Validators.required],
  });
  }
  ionViewWillEnter(){

    this.store.get('user').then((val) => {
      this.id = val.data.user.id ;
      this.category = val.data.user.category ;
    });
  }
  investigationForm()
      {
         let
             childName  : string   = this.investigation.controls["childName"].value,
             cause_concern    : string    = this.investigation.controls["cause_concern"].value,
             contactNumber     : string    = this.investigation.controls["contactNumber"].value,
             outcome_investigation  : string   = this.investigation.controls["outcome_investigation"].value,
             emergency_action    : string    = this.investigation.controls["emergency_action"].value,
             risk_assessment    : string    = this.investigation.controls["risk_assessment"].value,
             source_info     : string    = this.investigation.controls["source_info"].value,
             challenges_faced     : string    = this.investigation.controls["challenges_faced"].value,
             comments_swo     : string    = this.investigation.controls["comments_swo"].value;
             this.showLoader();

               let     headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
                       options  : any      = new RequestOptions({ headers: headers }),
                       user_id : any = this.id ,
                       user_category = this.category ,
                       url      : any       = 'http://192.168.43.137:8000/api/initial/investigations',
                       body    : any        = {user_category:user_category,challenges_faced:challenges_faced,user_id:user_id,childName:childName,source_info:source_info,cause_concern:cause_concern,contactNumber:contactNumber,emergency_action:emergency_action,risk_assessment:risk_assessment,outcome_investigation:outcome_investigation,comments_swo:comments_swo};

                       this.http.post(url,body,options).map(res =>res.json())
                       .subscribe(
                        data =>  {
                          this.sendNotification("You are successfully submit your form");
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
