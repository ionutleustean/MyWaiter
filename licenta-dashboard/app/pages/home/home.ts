"use strict";

// import Angular 2
import {Component} from "angular2/core";
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";
import {MATERIAL_DIRECTIVES, SidenavService} from "../../../node_modules/ng2-material/all";
import {FORM_DIRECTIVES} from "angular2/common";
import {UserService} from "../../core/services/UserService"
import {OrderService} from "../../core/services/OrderService"
import {RestaurantModel} from "../../core/model/RestaurantModel"


import {UserSettings} from "../user/settings/settings";
import {Dashboard} from "../dashboard/dashboard";
import {Products} from "../products/products";
import {Tables} from "../tables/tables";


@Component({
    selector: "page-home",
    templateUrl: "pages/home/home.template.html",
    providers: [SidenavService, FORM_DIRECTIVES, MATERIAL_DIRECTIVES, UserService, OrderService],
    directives: [RouterLink, RouterOutlet]
})

@RouteConfig([
    {path: "/", component: Tables, as: "Tables", data: undefined}, // the as serves as alias for links, etc
    {path: "/products", component: Products, as: "Products", data: undefined},
    {path: "/dashboard", component: Dashboard, as: "Dashboard", data: undefined},
    {path: "/user-settings", component: UserSettings, as: "UserSettings", data: undefined},
])

export class Home {


    public restaurant = new  RestaurantModel();
    
    constructor(private router:Router,
                public sidenav:SidenavService,
                public userService:UserService,
                public orderService:OrderService) {



        if (userService.isLoggedin()) {
            console.log(true);
        }
        else {


        }
        
        
        
        
        let $obs_restaurant = this.orderService.getRestaurant();
        
        $obs_restaurant.subscribe(
            data => {
                let res = data.json();
                this.restaurant = res.data[0];
                
                console.log(this.restaurant);
            },
            err => {
                console.log(err)
            }
        )
        
        

    }

    open(name:string) {
        this.sidenav.show(name);
    }

    close(name:string) {
        this.sidenav.hide(name);
    }
}
