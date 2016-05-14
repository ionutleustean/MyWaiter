"use strict";

import {Component} from "angular2/core";
import {RouterLink, Router} from "angular2/router";
import {FORM_DIRECTIVES} from "angular2/common";

import { MATERIAL_DIRECTIVES} from "../../../../node_modules/ng2-material/all";


@Component({
    selector: "page-register",
    templateUrl: "pages/user/register/register.template.html",
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})
export class Register {

    user = {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConf: ""
    };

    constructor(private router: Router) {
        console.log("register component loaded");
    }
}
