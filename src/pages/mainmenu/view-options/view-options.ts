import { Component } from "@angular/core";
import {  ViewController } from 'ionic-angular';

@Component({
 selector: 'page-view-options',
 template: `

	<ion-grid text-center>
		<ion-row>
			<ion-col>
			<h3>View</h3>
			</ion-col>
		</ion-row>

    <ion-row>
			<ion-col>
			<button ion-button outline(click)="onAction('iiview') ">Initial investigation form
			</button>
			</ion-col>
      </ion-row>

		<ion-row>
			<ion-col>
			<button ion-button outline(click)="onAction('receicedforms') ">Received forms
			</button>
			</ion-col>
		</ion-row>

	</ion-grid>
 `
})


export class ViewOptionsPage {

	constructor(private viewCtrl: ViewController) {}

		    onAction( action:string){
			 this.viewCtrl.dismiss({action: action});

		}
	}
