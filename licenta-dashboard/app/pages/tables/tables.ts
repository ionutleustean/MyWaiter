"use strict";

import {Component} from "@angular/core";
import {RouteParams, RouterLink, Router} from "@angular/router-deprecated";
import {FORM_DIRECTIVES} from "@angular/common";

import {MATERIAL_DIRECTIVES} from "../../../node_modules/ng2-material/index";

import {OrderService} from "../../core/services/OrderService";
import {SocketService} from '../../core/services/SocketService';

import {TakeOrder} from './take_order/take_order'

import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
    selector: "page-tables",
    templateUrl: "pages/tables/tables.template.html",
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink, MD_INPUT_DIRECTIVES, TakeOrder],
    providers: [],

})
export class Tables {

    table = {
        TableNumber: "",
        Seats: ""
    };

    allTables = [];

    countTables = 0;

    edit_id = "";
    edit_table = {
        TableNumber: "",
        Seats: "",
    }

    public order = [];
    
    public tableOrder =[];

    orderPage = {value: false};

    constructor(params:RouteParams, private router:Router, private orderService:OrderService, public socket:SocketService) {
        console.log("tabels component loaded");

        this.getTable();
        this.getNotification();

    }


    getNotification() {
        let self = this;

        this.socket.on("new_order", function (data, args) {
            console.log(args);
            self.getOrders();

        });
    }

    getTable() {
        this.orderService.getTable().subscribe(
            res => {
                console.log(res.json());

                let data = res.json();

                this.countTables = data.totalRows;
                this.allTables = data.data;
                this.getOrders();

            },
            err => {
                console.log(err)
            }
        );
    }

    addTable(flag:boolean) {
        if (flag) {

            console.log(this.table);

            let $obs = this.orderService.addTable(this.table);

            $obs.subscribe(
                data => {
                    console.log(data);
                    this.getTable();

                },
                err => {
                    console.log(err)
                }
            );

        } else {
            // this.status = 'Look for something else.';
        }
    }

    deleteTable(tableId:string) {

        let $obs = this.orderService.deleteTable(tableId);

        $obs.subscribe(
            data => {
                console.log(data);
                this.getTable();

            },
            err => {
                console.log(err)
            }
        );

    }

    setTableForEdit(table) {
        this.edit_id = table.id;
        this.edit_table.TableNumber = table.TableNumber;
        this.edit_table.Seats = table.Seats;
    }

    editTable(flag:boolean) {

        if (flag) {

            console.log(this.table);

            let $obs = this.orderService.editTable(this.edit_id, this.edit_table);

            $obs.subscribe(
                data => {
                    console.log(data);
                    this.getTable();

                },
                err => {
                    console.log(err)
                }
            );

        } else {
            // this.status = 'Look for something else.';
        }
    }

    takeOrder(flag:boolean) {

        console.log(this.orderPage);


        this.orderPage = {value: false};

        console.log(this.orderPage);


        if (flag) {


        } else {

        }
    }

    getTableOrder(tableNumber) {
        
        
        this.tableOrder = [];
        
        let self = this;
        
        this.order.forEach(function(order){
            if(order.TableNumber == tableNumber){
                self.tableOrder.push(order);
            }
        })
        
        console.log(this.tableOrder);
        
    }

    getOrders() {
        this.orderService.getOrders()
            .subscribe(
                data => {
                    console.log(data.json().data);
                    this.order = data.json().data;


                    //FixMe: this is shit
                    for (let j = 0; j < this.order.length; j++) {
                        for (let i = 0; i < this.allTables.length; i++) {
                            if (this.order[j].TableNumber == this.allTables[i].TableNumber) {
                                if (this.allTables[i].alert) {
                                    this.allTables[i].alert++;
                                }
                                else {
                                    this.allTables[i].alert = 1;
                                }
                            }
                        }
                    }
                }
            )
    }
    

}
