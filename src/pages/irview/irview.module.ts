import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IrviewPage } from './irview';

@NgModule({
  declarations: [
    IrviewPage,
  ],
  imports: [
    IonicPageModule.forChild(IrviewPage),
  ],
})
export class IrviewPageModule {}
