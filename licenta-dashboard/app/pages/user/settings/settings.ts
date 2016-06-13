"use strict";

import {Component} from "@angular/core";
import {RouteParams, RouterLink, Router} from "@angular/router-deprecated";
import {FORM_DIRECTIVES} from "@angular/common";

import {MATERIAL_DIRECTIVES} from "../../../../node_modules/ng2-material/index";
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';


import {RestaurantModel} from "../../../core/model/RestaurantModel"


import {UserService} from "../../../core/services/UserService"
import {OrderService} from "../../../core/services/OrderService"

@Component({
    selector: "page-settings",
    templateUrl: "pages/user/settings/settings.template.html",
    directives: [MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES, FORM_DIRECTIVES, RouterLink],
    providers: [UserService],

})
export class UserSettings {


    public user = {
        name: ""
    };
    public restaurant = new RestaurantModel();


    constructor(params:RouteParams, private router:Router, private userService:UserService, private orderService:OrderService) {

        this.getRestaurant();

    }


    getRestaurant() {
        this.orderService.getRestaurant()
            .subscribe(
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

    handleUpload(fileInput) {

        let file:FileList = fileInput.target.files;

        var fileReader = new FileReader();

        let self = this;

        fileReader.onload = function (fileLoadedEvent:FileReaderEvent) {

            let srcData = fileLoadedEvent.target.result;

            self.restaurant.Image = srcData;

        };


        fileReader.readAsDataURL(file[0]);

    }


    updateUser() {
        

        let restaurant = this.restaurant;
        let id = this.restaurant.id;
        console.log(this.restaurant);


        delete restaurant.id;
        delete restaurant.__metadata;
        
        


        this.orderService.updateRestaurant(id, restaurant).subscribe(
            data => {
                console.log(data)
                
                this.getRestaurant();
            });


    }

    requestResetPassword(username) {

        this.userService.requestResetPassword(username);
    }

}
