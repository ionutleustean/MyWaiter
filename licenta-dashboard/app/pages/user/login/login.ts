"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";


@Component({
    selector: "page-login",
    templateUrl: "pages/user/login/login.template.html",
    directives: []
})
export class Login {

    constructor(private router: Router) {
        console.log("login component loaded");

    }
}
