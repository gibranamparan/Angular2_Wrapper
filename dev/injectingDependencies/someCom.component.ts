import { Component, OnInit } from 'angular2/core';
import { ItemsCollectionService } from './itemsCollection.services'

@Component({
	selector: 'someCom',
	templateUrl: '/templates/injectingDependencies/someCom.html',
	//Instancia local de proveedor de servicio, independiente de cualquier otro componente
	//providers: [ItemsCollectionService]
})
export class SomeComComponent implements OnInit {
	constructor(private _items:ItemsCollectionService) {}

	public items = [];

	ngOnInit() {
		this.items = this._items.getItems();
	}

	addItem(value:string){
		this._items.addItem(value);
	}
}