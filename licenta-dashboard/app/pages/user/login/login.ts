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
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})
export class Login {

    user = {
        email: "",
        password: "",
    };

    constructor(private router:Router) {
        console.log("login component loaded");

    }
    
    goToRegister(){
        this.router.navigate(['/Register']);
    }
    
}
