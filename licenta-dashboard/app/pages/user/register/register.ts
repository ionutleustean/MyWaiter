"use strict";

import {Component} from "angular2/core";
import {RouterLink, Router} from "angular2/router";
import {FORM_DIRECTIVES} from "angular2/common";
import { MATERIAL_DIRECTIVES} from "../../../../node_modules/ng2-material/all";

import {UserModel} from "../../../core/model/UserModel";
import {UserService} from "../../../core/services/UserService";

@Component({
    selector: "page-register",
    templateUrl: "pages/user/register/register.template.html",
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink],
    providers: [UserModel, UserService],

})
export class Register {

    
 

    constructor(private router: Router, public user:UserModel, private userService:UserService) {
        console.log("register component loaded");
    }


    submitRegister(){
        this.userService.createUser(this.user);
    }
    
    
}
