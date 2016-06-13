"use strict";

import {Component} from "@angular/core";


import {OrderService} from '../../services/OrderService';

@Component({
    selector: "products-order-count-dashboard",
    directives: [],
    providers: [],

})

export class ProductsOrderCount {
    
    public productLabel = [];
    public productData = [{data: [], label: ''}];


    constructor(private orderService:OrderService) {

        this.getProductsCount();

    }

    getProductsCount() {
        this.orderService.getProductsOrderCount().subscribe(
            res => {
                console.log(res.json());

                let data = res.json();
                this.productLabel = this.getLabels(data);
                this.productData = this.getData(data);
                
            },
            err => {
                console.log(err)
            }
        );
    }

    public getLabels(data) {


        let result = data.map(function (item) {
            if (item.Name.length < 15) {
                return item.Name;
            }
            else {
                return item.Name.substring(0, 15) + "...";
            }
        });

        return result;

    }


    public getData(data) {
        let result = data.map(function (item) {
            return item.Count;
        });

        return [{data: result, label: 'Orders'},];

    }
}


