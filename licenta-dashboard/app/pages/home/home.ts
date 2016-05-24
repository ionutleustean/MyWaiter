"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";
import {MATERIAL_DIRECTIVES, SidenavService} from "../../../node_modules/ng2-material/all";
import {FORM_DIRECTIVES} from "angular2/common";
import {UserService} from "../../core/services/UserService"


import {UserSettings} from "../user/settings/settings";
import {Dashboard} from "../dashboard/dashboard";
import {Products} from "../products/products";
import {Tables} from "../tables/tables";


@Component({
    selector: "page-home",
    templateUrl: "pages/home/home.template.html",
    providers: [SidenavService, FORM_DIRECTIVES, MATERIAL_DIRECTIVES, UserService],
    directives: [RouterLink, RouterOutlet]
})

@RouteConfig([
    {path: "/", component: Tables, as: "Tables", data: undefined}, // the as serves as alias for links, etc
    {path: "/products", component: Products, as: "Products", data: undefined},
    {path: "/dashboard", component: Dashboard, as: "Dashboard", data: undefined},
    {path: "/user-settings", component: UserSettings, as: "UserSettings", data: undefined},
])

export class Home {


    constructor(private router:Router,
                public sidenav:SidenavService,
                public userService:UserService) {

        if (userService.isLoggedin()) {
            console.log(true);
        }
        else {
        }

    }

    open(name:string) {
        this.sidenav.show(name);
    }

    close(name:string) {
        this.sidenav.hide(name);
    }
}
