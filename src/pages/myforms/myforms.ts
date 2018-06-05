import { Component } from '@angular/core';
<<<<<<< HEAD:node_modules/ionic-angular/templates/page/ts.tmpl
import { NavController, NavParams } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams } from 'ionic-angular';
>>>>>>> 920fd96833df0f6cdcbb32b7917d25c062a9c557:src/pages/myforms/myforms.ts

/**
 * Generated class for the MyformsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

<<<<<<< HEAD:node_modules/ionic-angular/templates/page/ts.tmpl
=======
@IonicPage()
>>>>>>> 920fd96833df0f6cdcbb32b7917d25c062a9c557:src/pages/myforms/myforms.ts
@Component({
  selector: 'page-myforms',
  templateUrl: 'myforms.html',
})
export class MyformsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyformsPage');
  }

}
