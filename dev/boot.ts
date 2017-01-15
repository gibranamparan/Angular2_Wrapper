///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from "angular2/router"
import {HTTP_PROVIDERS} from 'angular2/http'


//Inyeccion de dependencias para uso de componentes inferiores
bootstrap(AppComponent, [ROUTER_PROVIDERS,HTTP_PROVIDERS]);