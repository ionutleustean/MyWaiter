"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";
import {FORM_DIRECTIVES} from "angular2/common";

import { MATERIAL_DIRECTIVES} from "../../../../node_modules/ng2-material/all";


@Component({
    selector: "page-login",
    templateUrl: "pages/user/login/login.template.html",
    // styleUrls: ['_login.css'],
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES]
})
export class Login {

    user = {
        title: "Developer",
        email: "ipsum@lorem.com",
        firstName: "",
        lastName: "",
        company: "Google",
        address: "1600 Amphitheatre Pkwy",
        address2: "",
        city: "Mountain View",
        state: "CA",
        biography: "Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!",
        postalCode: "94043"
    };

    constructor(private router: Router) {
        console.log("login component loaded");

    }
}
