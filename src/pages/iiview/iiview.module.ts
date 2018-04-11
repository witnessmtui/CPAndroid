import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IiviewPage } from './iiview';

@NgModule({
  declarations: [
    IiviewPage,
  ],
  imports: [
    IonicPageModule.forChild(IiviewPage),
  ],
})
export class IiviewPageModule {}
