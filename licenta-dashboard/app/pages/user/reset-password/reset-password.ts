"use strict";

import {Component} from "@angular/core";
import {RouteParams, RouterLink, Router} from "@angular/router-deprecated";
import {FORM_DIRECTIVES} from "@angular/common";

import {MATERIAL_DIRECTIVES} from "../../../../node_modules/ng2-material/index";

import {UserService} from "../../../core/services/UserService"

@Component({
    selector: "page-reset-password",
    templateUrl: "pages/user/reset-password/reset-password.template.html",
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink],
    providers: [UserService],

})
export class ResetPassword {

    private resetToken:string;
    public password:string;



    constructor(params:RouteParams, private router:Router, private userService:UserService) {
        this.resetToken = params.get('token');
        console.log("reset-password component loaded");
    }


    resetPassword() {
        if (this.password) {
            
            this.userService.resetPassword(this.password, this.resetToken);
        }

        else {
            console.log("password empty");
        }
    }
}
