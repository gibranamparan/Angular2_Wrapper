import {Component,OnInit} from 'angular2/core';
import {AlumnoEditComponent} from './alumno-edit.component'
import {AlumnoService} from './alumno.service'
import {Alumno} from './alumno'
import {Router} from 'angular2/router'

@Component({
	selector:"alumno-list",
    templateUrl: '/templates/alumno/alumno_index.html',
    directives:[AlumnoEditComponent],
    providers:[AlumnoService], //Nueva instancia para uso local
})
export class AlumnoIndexComponent implements OnInit{
	constructor(private _alumnoService : AlumnoService, private _router : Router){}

	public alumnos:Alumno[];
	getAlumnos(){
		this._alumnoService.getAlumnos().then((alumnos: Alumno[]) => 
			this.alumnos = alumnos
			)
	}

	//Se almacena el objeto seleccionado
	public alumnoSeleccionado:Alumno;
	onSelect(alumno){
		this.alumnoSeleccionado=alumno;
	}

	createFrom(){
		//Como redireccionar con parametros de navegacion
		this._router.navigate(['CreateAlumnoFrom',
			{apellido:this.alumnoSeleccionado.apellido}])
	}

	ngOnInit():any{
		this.getAlumnos();
	}
}