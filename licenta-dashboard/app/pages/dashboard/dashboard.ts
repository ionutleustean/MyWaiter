"use strict";

import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {RouteParams, RouterLink, Router} from "@angular/router-deprecated";

import {MATERIAL_DIRECTIVES} from "../../../node_modules/ng2-material/index";
import {ChartTable} from '../../components/ChartTable/chart_table';

import {Products} from "../../core/model/Dashboard/Products"
import {ProductsOrderCount} from "../../core/model/Dashboard/ProductsOrderCount"
import {TableOrderCount} from "../../core/model/Dashboard/TableOrderCount"

@Component({
    selector: "page-dashboard",
    templateUrl: "pages/dashboard/dashboard.template.html",
    directives: [MATERIAL_DIRECTIVES,NgClass,ChartTable, FORM_DIRECTIVES, CORE_DIRECTIVES, RouterLink],
    providers: [Products, ProductsOrderCount, TableOrderCount],

})
export class Dashboard {


    
    constructor(params:RouteParams, 
                private router:Router, 
                public products:Products,
                public tableOrderCount:TableOrderCount,
                public productsOrderCount:ProductsOrderCount) {
        

    }
    

    public lineChartColours:Array<any> = [
        {
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#e74c3c',
            pointBackgroundColor: '#e74c3c',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#e74c3c'
        },
    ];
    
    public barChartColours:Array<any> = [
        { 
            backgroundColor: '#2980b9',
        },
    ];

}
