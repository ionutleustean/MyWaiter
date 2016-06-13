"use strict";

import {Component} from "@angular/core";


import {OrderService} from '../../services/OrderService';
import {ProductsModel} from '../ProductsModel';

@Component({
    selector: "products-dashboard",
    directives: [],
    providers: [],

})

export class Products {
    
    public productLabel = [];
    public productData = [{data: [], label: ''}];


    constructor(private orderService:OrderService) {
        console.log("products model buhuhu");

        this.getProducts();

    }

    getProducts() {
        this.orderService.getProducts().subscribe(
            res => {
                console.log(res.json());

                let data = res.json();
                
                this.productLabel = this.getLabels( data.data);
                this.productData = this.getData( data.data);


            },
            err => {
                console.log(err)
            }
        );
    }

    public getLabels(data) {
        
        let result = data.map(function (item) {
            if (item.Name.length < 15){
                return item.Name;
            }
            else {
                return item.Name.substring(0,15) + "...";
            }
        });

        return result;

    }
    
    public getData(data) {
        
        let result = data.map(function (item) {
            return item.Rating;
        });

        return [{data: result, label: 'Rating'},];

    }
}


