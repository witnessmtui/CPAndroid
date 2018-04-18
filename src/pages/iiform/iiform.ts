import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {IiformService} from "../../services/iiform";


@IonicPage()
@Component({
  selector: 'page-iiform',
  templateUrl: 'iiform.html',
})
export class IiformPage {
	selectOptions = ['Police Involvement','Medical Examination'];

  constructor(private iiService:IiformService){ 

	}

 onAddItem(form: NgForm){  
 	this.iiService.addItem(form.value.childName, form.value.caseNumber, form.value.contactNumber);
 	form.reset();
 }
 

}
