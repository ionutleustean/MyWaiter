"use strict";

import {Component} from "@angular/core";
import {RouteParams, RouterLink, Router} from "@angular/router-deprecated";
import {FORM_DIRECTIVES} from "@angular/common";

import {MATERIAL_DIRECTIVES} from "../../../node_modules/ng2-material/index";
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';


import {OrderService} from "../../core/services/OrderService";
import {ImgurService} from '../../core/services/ImgurService';

import {ProductsModel, EditProductModel} from "../../core/model/ProductsModel";

import {ProductSearchPipe} from "../../core/pipes/ProductSearchPipe"


@Component({
    selector: "page-products",
    templateUrl: "pages/products/products.template.html",
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink, MD_INPUT_DIRECTIVES],
    providers: [],
    pipes: [ProductSearchPipe]
})


export class Products {


    add_product:ProductsModel = new ProductsModel();

 
    display_products = [];
    edit_product:EditProductModel = new EditProductModel();

    image:FileList = null;
    countProducts = 0;


    constructor(params:RouteParams,
                private router:Router,
                private orderService:OrderService,
                private imgurService:ImgurService) {
        console.log("products component loaded");

        this.getProducts();

    }


    handleUploadImage(fileInput) {
        this.image = fileInput.target.files;
    }

    getProducts() {
        this.orderService.getProducts().subscribe(
            res => {
                console.log(res.json());

                let data = res.json();

                this.countProducts = data.totalRows;
                this.display_products = data.data;

            },
            err => {
                console.log(err)
            }
        );
    }

    addProduct(flag:boolean) {
        if (flag) {


            this.imgurService.addImage(this.image[0]).then(
                (res:{data:{link:string}}) => {
                    this.add_product.Image = res.data.link;
                    let $obs = this.orderService.addProduct(this.add_product);

                    $obs.subscribe(
                        data => {
                            console.log(data);
                            this.getProducts();

                        },
                        err => {
                            console.log(err)
                        }
                    );

                }
            );

        } else {
            // this.status = 'Look for something else.';
        }
    }

    deleteProduct(id:string) {

        let $obs = this.orderService.deleteProduct(id);

        $obs.subscribe(
            data => {
                console.log(data);
                this.getProducts();

            },
            err => {
                console.log(err)
            }
        );

    }

    setProductForEdit(product:EditProductModel) {
        this.edit_product = product;
    }

    editProduct(flag:boolean) {

        if (flag) {


            this.imgurService.addImage(this.image[0]).then(
                (res:{data:{link:string}}) => {
                    this.edit_product.Image = res.data.link;


                    let $obs = this.orderService.editProduct(this.edit_product.id, this.edit_product);

                    $obs.subscribe(
                        data => {
                            console.log(data);
                            this.getProducts();

                        },
                        err => {
                            console.log(err)
                        }
                    );

                }
            );


        } else {
            // this.status = 'Look for something else.';
        }


    }


}

interface FileReaderEventTarget extends EventTarget {
    result:string
}

interface FileReaderEvent extends Event {
    target:FileReaderEventTarget;
    getMessage():string;
}
