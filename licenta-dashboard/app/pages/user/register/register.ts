"use strict";

import {Component} from "@angular/core";
import {RouterLink, Router} from "@angular/router-deprecated";
import {FORM_DIRECTIVES} from "@angular/common";
import {MATERIAL_DIRECTIVES} from "../../../../node_modules/ng2-material/index";
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';


import {UserModel} from "../../../core/model/UserModel";
import {RestaurantModel} from "../../../core/model/RestaurantModel";
import {UserService} from "../../../core/services/UserService";
import {OrderService} from "../../../core/services/OrderService";

@Component({
    selector: "page-register",
    templateUrl: "pages/user/register/register.template.html",
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink, MD_INPUT_DIRECTIVES],
    providers: [UserModel, RestaurantModel, UserService, OrderService],

})
export class Register {

    constructor(private router:Router,
                public user:UserModel,
                public restaurant:RestaurantModel,
                private userService:UserService,
                private orderService:OrderService) {

        console.log("register component loaded");

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


    submitRegister() {

        this.restaurant.Name = this.user.firstName;
        this.restaurant.UserMail = this.user.email;

        console.log(this.restaurant);


        let $obsUser = this.userService.createUser(this.user);

        $obsUser.subscribe(
            data => {


                this.userService.updateRole(this.user.email).subscribe(
                    data => {
                        this.orderService.createRestaurant(this.restaurant).subscribe(
                            data => {
                                console.log(data)
                                this.router.navigateByUrl("/login");
                            },
                            err => {
                                console.log(err)
                            },
                            () => {
                                console.log('Finish Auth')
                            });
                    },
                    err => {
                        console.log(err)
                    },
                    () => {
                        console.log('Finish Auth')
                    }
                );
                
            },
            err => {
                // console.log(err)
            },
            () => {
                // console.log('Finish Auth')
            });

    }


}


interface FileReaderEventTarget extends EventTarget {
    result:string
}

interface FileReaderEvent extends Event {
    target:FileReaderEventTarget;
    getMessage():string;
}
