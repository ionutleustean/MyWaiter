"use strict";


// import the application
import {App} from "./app";

// import Angular 2
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provide, enableProdMode} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {ELEMENT_PROBE_PROVIDERS} from "@angular/platform-browser";

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";

// enable production mode of Angular
// enableProdMode(); // enable for production (also uncomment the import above!)

import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';


import {OVERLAY_CONTAINER_TOKEN} from '@angular2-material/core/overlay/overlay';
import {MdLiveAnnouncer} from '@angular2-material/core/live-announcer/live-announcer';
import {createOverlayContainer} from '@angular2-material/core/overlay/overlay-container';
import {MdGestureConfig} from '@angular2-material/core/gestures/MdGestureConfig';




// bootstrap our app
console.log("Bootstrapping the App");

// in [] is the list of injector bindings. Those bindings are used when an injector is created. Passing these here make the bindings available application-wide
bootstrap(App, [
	//appServicesInjectables, // alternative way of filling the injector with all the classes we want to be able to inject
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	ELEMENT_PROBE_PROVIDERS,
    provide(LocationStrategy,
        {useClass: HashLocationStrategy}),
    provide(OVERLAY_CONTAINER_TOKEN, {useValue: createOverlayContainer()}),
    MdLiveAnnouncer,
    provide(HAMMER_GESTURE_CONFIG, {useClass: MdGestureConfig})
    // provide(LocationStrategy, { useClass: PathLocationStrategy }) // can be switched to HashLocationStrategy if you cannot configure your server appropriately for URL rewriting

]).then(
	(success:any) => console.log("Bootstrap successful"),
	(error:any) => console.error(error)
);
