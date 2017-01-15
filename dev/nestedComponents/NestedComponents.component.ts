import {Component} from 'angular2/core';
import {Child1Component} from './child1.component'


@Component({
    templateUrl:'/templates/nestedComponents/testPassedArgumentsParentChild.html',
    directives : [Child1Component]
})

export class NestedComponentsComponent {
	mensaje:string
}