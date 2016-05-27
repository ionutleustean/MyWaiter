"use strict";

import {Component} from "@angular/core";
import {RouteParams, RouterLink, Router} from "@angular/router-deprecated";
import {FORM_DIRECTIVES} from "@angular/common";

import {MATERIAL_DIRECTIVES} from "../../../node_modules/ng2-material/index";

import {OrderService} from "../../core/services/OrderService";
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
    selector: "page-tables",
    templateUrl: "pages/tables/tables.template.html",
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink, MD_INPUT_DIRECTIVES],
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


    constructor(params:RouteParams, private router:Router, private orderService:OrderService) {
        console.log("tabels component loaded");

        this.getTable();

    }

    getTable() {
        this.orderService.getTable().subscribe(
            res => {
                console.log(res.json());

                let data = res.json();

                this.countTables = data.totalRows;
                this.allTables = data.data;

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
    
    setTableForEdit(table){
        this.edit_id = table.id;
        this.edit_table.TableNumber = table.TableNumber;
        this.edit_table.Seats = table.Seats;
    }
    
    editTable(flag:boolean){
        
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

}
