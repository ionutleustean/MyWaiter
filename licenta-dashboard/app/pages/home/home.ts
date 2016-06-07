"use strict";

// import Angular 2
import {Component} from "@angular/core";
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "@angular/router-deprecated";
import {MATERIAL_DIRECTIVES, MdIcon} from "../../../node_modules/ng2-material/index";
import {FORM_DIRECTIVES} from "@angular/common";
import {Cookie} from "../../core/services/CookieService";


import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';


import {UserService} from "../../core/services/UserService"
import {OrderService} from "../../core/services/OrderService"
import {ImgurService} from '../../core/services/ImgurService';
import {SocketService} from '../../core/services/SocketService';

import {RestaurantModel} from "../../core/model/RestaurantModel"


import {UserSettings} from "../user/settings/settings";
import {Dashboard} from "../dashboard/dashboard";
import {Products} from "../products/products";
import {Tables} from "../tables/tables";


@Component({
    selector: "page-home",
    templateUrl: "pages/home/home.template.html",
    providers: [UserService, OrderService, ImgurService, SocketService],
    directives: [RouterLink, RouterOutlet, FORM_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar, MdIcon, MD_SIDENAV_DIRECTIVES]
})

@RouteConfig([
    {path: "/", component: Tables, as: "Tables", data: undefined}, // the as serves as alias for links, etc
    {path: "/products", component: Products, as: "Products", data: undefined},
    {path: "/dashboard", component: Dashboard, as: "Dashboard", data: undefined},
    {path: "/user-settings", component: UserSettings, as: "UserSettings", data: undefined},
])

export class Home {


    public restaurant = new RestaurantModel();
    public order = [];


    constructor(private router:Router,
                public userService:UserService,
                public orderService:OrderService,
                public socket:SocketService) {


        socket.login("mywaiter");

 

        if (userService.isLoggedin()) {
            console.log(true);
        }

        this.getOrders();
        this.getRestaurant();
        this.getNotification();


    }

    getNotification(){
        let self = this;

        this.socket.on("new_order", function (data, args) {
            console.log(args);
            self.getOrders();

        });
    }

    getRestaurant(){
        this.orderService.getRestaurant()
            .subscribe(
                data => {
                    let res = data.json();
                    this.restaurant = res.data[0];

                    Cookie.setCookie("restaurant_id", res.data[0].id);

                },
                err => {
                    console.log(err)
                }
            )
    }
    
    getOrders() {
        this.orderService.getOrders()
            .subscribe(
                data => {
                    console.log(data.json().data);
                    this.order = data.json().data
                }
            )
    }


}
