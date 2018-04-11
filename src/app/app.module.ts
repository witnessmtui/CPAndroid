import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { IrviewPage } from '../pages/irview/irview';
import { IiviewPage } from '../pages/iiview/iiview';
import { EnrolPage } from '../pages/enrol/enrol';
import { RegistrationPage } from '../pages/registration/registration';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';
import { IrformPage } from '../pages/irform/irform';
import { IiformPage } from '../pages/iiform/iiform';
import { NotificationsPage } from '../pages/notifications/notifications';

@NgModule({
  declarations: [
    MyApp,
    IrviewPage,
    IiviewPage,
    EnrolPage,
    LoginPage,
    RegistrationPage,
    MainmenuPage,
    IrformPage,
    IiformPage,
    NotificationsPage 

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IrviewPage,
    IiviewPage,
    EnrolPage,
    LoginPage,
    RegistrationPage,
    MainmenuPage,
    IrformPage,
    IiformPage,
    NotificationsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
