import {Component} from 'angular2/core';
import {Alumno} from './alumno'
import {AlumnoService} from './alumno.service'
import {Router} from 'angular2/router'
import {RouteParams} from 'angular2/router'
import {OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common'
import {FormBuilder} from 'angular2/common'
import {Validators} from 'angular2/common'

@Component({
	selector:"alumno-create",
    templateUrl: '/templates/alumno/alumno_create.html',
    providers:[AlumnoService],
})

export class AlumnoCreateComponent implements OnInit{
	public formaNuevoAlumno:ControlGroup

	constructor(private _alumnoService:AlumnoService,
		private _router:Router, private _routeParams:RouteParams,
		private _formBuilder:FormBuilder){}

	newAlumno(nombre, apellido, grupo){
		let alumno:Alumno = {nombre:nombre,apellido:apellido,grupo:grupo};
		this._alumnoService.addAlumno(alumno);
		this._router.navigate(['Alumnos'])
	}

	ngOnInit():any{
		//Como recibir parametros de navegacion
		//Como crear una forma con Angular2-
		this.formaNuevoAlumno = this._formBuilder.group({
			'nombre':['',Validators.required],
			'apellido':[this._routeParams.get('apellido'),Validators.required],
			'grupo':['',Validators.required],
		})
	}

	onSubmit(value){
		this._alumnoService.addAlumno(value);
		this._router.navigate(['Alumnos'])
	}	
}