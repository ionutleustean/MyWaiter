"use strict";

import {Component} from "@angular/core";


import {OrderService} from '../../services/OrderService';

@Component({
    selector: "products-order-count-dashboard",
    directives: [],
    providers: [],

})

export class TableOrderCount {

    public productLabel = [];
    public productData = [{data: [], label: ''}];


    constructor(private orderService:OrderService) {

        this.getProductsCount();

    }

    getProductsCount() {
        this.orderService.getTableOrderCount().subscribe(
            res => {
                console.log(res.json());

                let data = res.json();
                
                
                this.productLabel = this.getLabels(data);
                this.productData = this.getData(data);
                
                console.log( this.productLabel);
                console.log(this.productData);

            },
            err => {
                console.log(err)
            }
        );
    }

    public getLabels(data) {


        let result = data.map(function (item) {

            return "Table "+item.TableNumber;
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


