import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyformsPage } from './myforms';

@NgModule({
  declarations: [
    MyformsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyformsPage),
  ],
})
export class MyformsPageModule {}
