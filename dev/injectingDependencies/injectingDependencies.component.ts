import { Component } from 'angular2/core';
import { SomeComComponent } from './someCom.component';
import { AnotherComComponent} from './anotherCom.component';
import { ItemsCollectionService} from './itemsCollection.services';

@Component({
	template: `
		<someCom></someCom>
		<anotherCom></anotherCom>
	`,
	directives: [SomeComComponent, AnotherComComponent],
	//Al ser invocado el proveedor desde el componente superior, las acciones provocadas en cada componente afectan al anterio.
	//Esto permite una comunicacion directa entre componentes hermanos (invocados por el mismo componente), debido a que se comunicacn
	//a traves de la misma instancia pasada por el padre (muy cool)
	providers: [ItemsCollectionService]
})
export class InjectingDependenciesComponent {
}