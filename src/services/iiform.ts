import {Info} from "../models/info";


export class IiformService{
	//VARIABLE TO DEFINE LIST OF  INGREDIENTS
	private infos: Info[]= [];

	addItem(name:string, caseNumber: number, contactNumber: number){
		this.infos.push(new Info(name, caseNumber, contactNumber));
		console.log(this.infos);
	}

	/**ADD MORE THAN 1 ITEM AND RECEIVE A LIST OF INGREDIENTS AT THE END**/
 
	addItems(items: Info[]){
		this.infos.push(...items);
	}

	getItems(){
		return this.infos.slice();
	}

	removeItem(index: number){
		this.infos.splice(index,1);
	}
	
} 