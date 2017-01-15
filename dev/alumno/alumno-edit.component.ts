import {Component,OnInit} from 'angular2/core';
import {Alumno} from './alumno'

@Component({
	selector:"alumno-edit",
    templateUrl: '/templates/alumno/alumno_edit.html',
    inputs:["alumno"], //Se indica que el componente tiene un argumento de entrada
})

export class AlumnoEditComponent implements OnInit{
	public alumno:Alumno;
	
	hasToDisable(){
		return this.alumno==undefined;
	}

	ngOnInit():any{
		this.alumno = {nombre:'',apellido:'',grupo:''};
	}
}