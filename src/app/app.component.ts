import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { IiviewPage } from '../pages/iiview/iiview';
import { EnrolPage } from '../pages/enrol/enrol';
import { IrformPage } from '../pages/irform/irform';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';
import { IiformPage } from '../pages/iiform/iiform';
import { NotificationsPage } from '../pages/notifications/notifications';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor( public store:Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: MainmenuPage },
      { title: 'Notifications', component: NotificationsPage },
      { title: 'Initial Investigation form', component: IiformPage },
      { title: 'IiviewPage', component: IiviewPage },
      { title: 'Enrolment', component: EnrolPage }


    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  /*logout(){
    this.nav.setRoot(LoginPage);
  }
  /*logout(){
  // public navCtrl: NavController,
  //NavController.(LoginPage);
  this.store.set('user','');
  this.nav.setRoot(LoginPage);

  }*/
}
