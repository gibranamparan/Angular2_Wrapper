/*
En este documento se definen todos los metodos relacionados con la entidad de
alumnos que permiten acceder a datos en el servidor referentes a sus tablas.
*/
import {Injectable} from "angular2/core"
import {Http,Headers} from 'angular2/http'
import 'rxjs/add/operator/map'


@Injectable()
export class HTTPTestService{
	constructor(private _http:Http){}

	getCurrentTime(){
		return this._http.get('http://date.jsontest.com/')
		.map(res=>res.json())
	}

	postJSON(json){
		var params = 'json='+json;
		var headers = new Headers();
		headers.append('Content-Type','application/x-www-form-urlencoded');
		return this._http.post('http://validate.jsontest.com/',params,
			{headers:headers})
		.map(res=>res.json())
	}
}