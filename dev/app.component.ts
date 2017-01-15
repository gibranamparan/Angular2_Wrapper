import {Component} from 'angular2/core';
import {AlumnoIndexComponent} from './alumno/alumno-index.component'
import {AlumnoCreateComponent} from './alumno/alumno-create.component'
import {NestedComponentsComponent} from './nestedComponents/NestedComponents.component'
import {TestPipesComponent} from './testPipes.component'
import {HTTPTestComponent} from './httpTest.component'
import {InjectingDependenciesComponent} from './injectingDependencies/injectingDependencies.component'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'


@Component({
    selector: 'my-app',
    templateUrl: '/templates/main-layout.html',
    directives:[AlumnoIndexComponent,HTTPTestComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
	{name:"Alumnos",path:'/alumnos',component: AlumnoIndexComponent, useAsDefault:true},
	{name:"CreateAlumno",path:'/CreateAlumno',component: AlumnoCreateComponent},
	{name:"CreateAlumnoFrom",path:'/CreateAlumno/:apellido',component: AlumnoCreateComponent},
	{name:"NestedComponents",path:'/NestedComponents',component: NestedComponentsComponent},
	{name:"TestPipes",path:'/TestPipes',component: TestPipesComponent},
	{name:"TestInjection",path:'/TestInjection',component: InjectingDependenciesComponent },
])
export class AppComponent {
}
