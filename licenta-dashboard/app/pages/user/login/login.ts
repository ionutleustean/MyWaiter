"use strict";

// import Angular 2
import {Component} from "@angular/core";
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "@angular/router-deprecated";
import {FORM_DIRECTIVES} from "@angular/common";
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';


import {MATERIAL_DIRECTIVES} from "../../../../node_modules/ng2-material/index";

import {UserService} from "../../../core/services/UserService"

@Component({
    selector: "page-login",
    templateUrl: "pages/user/login/login.template.html",
    // styleUrls: ['_login.css'],
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink, MD_INPUT_DIRECTIVES],
    providers: [UserService],

})
export class Login {

    user = {
        username: "",
        password: "",
    };

    constructor(private router:Router, private userService:UserService) {
        console.log("login component loaded");

    }
    
    submitLogin() {
        this.userService.login(this.user);
    }
    
    requestResetPassword() {
        if(this.user.username){
            this.userService.requestResetPassword(this.user.username)
        }
        
        else {
            console.log("username empty");
        }
    }
}
