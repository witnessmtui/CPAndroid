import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { EnrolPage} from '../pages/enrol/enrol';
import { RegistrationPage} from '../pages/registration/registration';
import { MainmenuPage} from '../pages/mainmenu/mainmenu';
import { IiformPage} from '../pages/iiform/iiform';
import { IiviewPage} from '../pages/iiview/iiview';
import { ViewOptionsPage } from '../pages/mainmenu/view-options/view-options';
import { NotificationsPage} from '../pages/notifications/notifications';
import {IiformService} from "../services/iiform";
import { ForgetpassPage } from '../pages/forgetpass/forgetpass';
import { IonicStorageModule } from '@ionic/storage';
import { ViewFormPage } from '../pages/view-form/view-form';
import { EditFormPage } from '../pages/edit-form/edit-form';
import { ReceivedFormPage } from '../pages/received-form/received-form';


@NgModule({
  declarations: [
    MyApp,
    IiviewPage,
    EditFormPage,
    EnrolPage,
    LoginPage,
    RegistrationPage,
    MainmenuPage,
    ForgetpassPage,
    ViewOptionsPage,
    IiformPage,
    ViewFormPage,
    ReceivedFormPage,
    NotificationsPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    IiviewPage,
    EnrolPage,
    LoginPage,
    RegistrationPage,
    MainmenuPage,
    IiformPage,
    ViewOptionsPage,
    ForgetpassPage,
    ReceivedFormPage,
    ViewFormPage,
    NotificationsPage,
    EditFormPage
      ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ,IiformService]
})
export class AppModule {}
