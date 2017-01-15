import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'child1-component',
    templateUrl:'/templates/nestedComponents/child1.html',
    inputs: ['nombre_padre: datoEnviado'],
    outputs: ['childChanged']
})

export class Child1Component {
	nombre_padre : string;
	childChanged = new EventEmitter<string>();

	onChange(value: string){
		this.childChanged.emit(value);
	}
}