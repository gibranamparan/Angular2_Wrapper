import { Injectable } from 'angular2/core';

@Injectable()
export class ItemsCollectionService {
	private items = ['PSP2','Nintendo 64','Alienware 2'];

	addItem(value:string){
		this.items.push(value);
	}

	getItems(){
		return this.items;
	}

	constructor() {}
}