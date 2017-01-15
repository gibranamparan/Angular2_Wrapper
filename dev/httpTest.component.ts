import {Component} from 'angular2/core';
import {HTTPTestService} from './httpTest.service'

@Component({
    selector: 'httpTest',
    template:`
    <div class='row'>
    <div class="col-md-6">
    	<button class="btn btn-info" (click)='onClickGet()'>Test Get</button>
		<p>Salida: {{getData}}</p>
	</div>
    <div class="col-md-6">
		<button  class="btn btn-info" (click)='onClickPost()'>Test Post</button>
		<p>Entrada: {{postData}}</p>
	</div>
	</div>
    `,
    providers:[HTTPTestService]
})

export class HTTPTestComponent {
	getData:string
	postData:string

	constructor(private _httpTestService:HTTPTestService){}

	onClickGet(){
		this._httpTestService.getCurrentTime()
		.subscribe(
			data=>this.getData = JSON.stringify(data),
			error=>alert(error),
			()=>console.log('done!')
		);
	}

	onClickPost(){
		var json = JSON.stringify({var1:'test',var2:3});
		this._httpTestService.postJSON(json)
		.subscribe(
			data=>this.postData = JSON.stringify(data),
			error=>alert(error),
			()=>console.log('done!')
		);
	}
}