/*
En este documento se definen todos los metodos relacionados con la entidad de
alumnos que permiten acceder a datos en el servidor referentes a sus tablas.
*/
import {Injectable} from "angular2/core"
import {ALUMNOS} from "./test-alumnosDB"
import {Alumno} from './alumno'	


@Injectable()
export class AlumnoService{
	getAlumnos(){
		return Promise.resolve(ALUMNOS);
	};
	addAlumno(alumno:Alumno){
		return Promise.resolve(ALUMNOS).then((alumnos:Alumno[]) => alumnos.push(alumno));
	};
}