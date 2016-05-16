"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";
import {MATERIAL_DIRECTIVES, SidenavService} from "../../../node_modules/ng2-material/all";


import {UserSettings} from "../user/settings/settings";


@Component({
	selector: "page-home",
	templateUrl: "pages/home/home.template.html",
    providers: [SidenavService, MATERIAL_DIRECTIVES],
    directives: [RouterLink, RouterOutlet]
})

@RouteConfig([
    {path: "/", component: UserSettings, as: "UserSettings", data: undefined}, // the as serves as alias for links, etc
])

export class Home {
    

    constructor(private router: Router,
                public sidenav: SidenavService) {
        console.log("Home component loaded");

    }
 
    open(name: string) {
        this.sidenav.show(name);
    }
    close(name: string) {
        this.sidenav.hide(name);
    }
}
