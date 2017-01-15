import {Component,OnInit} from 'angular2/core';

@Component({
	selector:"alumno-list",
    template:`
	<div>
		<h2>Pipes</h2>
		<div>
			{{fecha | date:'fullDate'}}
		</div>
		<div>
			{{18.5 | currency:'USD':true}}
		</div>
		<div>
			{{randomData | async}}
		</div>
	</div>
    `
})

export class TestPipesComponent{
	fecha = new Date();
	randomData = new Promise((resolve, reject)=> 
		{setTimeout(()=> resolve('Random Data'),1000);
	});
}