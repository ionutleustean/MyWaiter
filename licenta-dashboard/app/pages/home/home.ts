"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";


@Component({
	selector: "page-home",
	templateUrl: "pages/home/home.template.html",
	directives: []
})
export class Home {

	constructor(private router: Router) {
		console.log("Home component loaded");
        this.router.navigate(["Login"]);

    }
}
