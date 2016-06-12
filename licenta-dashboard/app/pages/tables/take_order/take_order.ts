"use strict";

import {Component, Input, Output, OnChanges, SimpleChange} from "@angular/core";
import {RouteParams, RouterLink, Router} from "@angular/router-deprecated";

import {MATERIAL_DIRECTIVES} from "../../../../node_modules/ng2-material/index";

import {OrderService} from "../../../core/services/OrderService";
import {SocketService} from '../../../core/services/SocketService';
import {Injectable} from '@angular/core';



import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Injectable()

@Component({
    selector: "take-order",
    templateUrl: "pages/tables/take_order/take_order.template.html",
    directives: [MATERIAL_DIRECTIVES, RouterLink, MD_INPUT_DIRECTIVES],
    providers: [],

})
export class TakeOrder {

    @Input() tableOrder:any;
    @Input() orderPage:any;


    orderProducts = [];
    selectedOrder = {
        id: null,
        Processing: false,
        Done: false
    };

    constructor(params:RouteParams, private router:Router, private orderService:OrderService, public socket:SocketService) {


    }


    goToOrder(order) {
        this.orderPage = {value: true};
        this.selectedOrder = order;
        this.getOrderProducts(order);
    }

    getOrderProducts(order) {
        this.orderProducts = [];
        this.orderService.getOrderProducts(order.id)
            .subscribe(
                res => {
                    this.orderProducts = res.json();
                }
            );
    }

    processOrder() {

        this.selectedOrder.Processing = true;
        this.orderService.processOrder(this.selectedOrder.id)
            .subscribe(
                res => {
                    console.log(res)
                }
            );

    }

    finishOrder() {

        this.setOrderPage(false);

        this.selectedOrder.Done = true;

        let self = this;

        this.tableOrder = this.tableOrder
            .filter(function (el) {
                    return el.id !== self.selectedOrder.id;
                }
            );

        this.orderService.finishOrder(this.selectedOrder.id)
            .subscribe(
                res => {
                    console.log(res);
                }
            );


    }

    setOrderPage(flag) {
        this.orderPage.value = flag;
    }

}
