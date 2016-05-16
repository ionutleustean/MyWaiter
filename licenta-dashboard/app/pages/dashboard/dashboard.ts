"use strict";

import {Component} from "angular2/core";
import {RouteParams, RouterLink, Router} from "angular2/router";
import {FORM_DIRECTIVES} from "angular2/common";

import {MATERIAL_DIRECTIVES} from "../../../node_modules/ng2-material/all";


@Component({
    selector: "page-dashboard",
    templateUrl: "pages/dashboard/dashboard.template.html",
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink],
    providers: [],

})
export class Dashboard {

    private resetToken:string;
    public password:string;



    constructor(params:RouteParams, private router:Router) {
        this.resetToken = params.get('token');
        console.log("user setting component loaded");
    }



}
