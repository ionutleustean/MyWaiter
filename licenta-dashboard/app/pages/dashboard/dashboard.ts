"use strict";

import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {RouteParams, RouterLink, Router} from "@angular/router-deprecated";

import {MATERIAL_DIRECTIVES} from "../../../node_modules/ng2-material/index";
import {ChartTable} from '../../components/ChartTable/chart_table';



@Component({
    selector: "page-dashboard",
    templateUrl: "pages/dashboard/dashboard.template.html",
    directives: [MATERIAL_DIRECTIVES,NgClass,ChartTable, FORM_DIRECTIVES, CORE_DIRECTIVES, RouterLink],
    providers: [],

})
export class Dashboard {

    private resetToken:string;
    public password:string;



    constructor(params:RouteParams, private router:Router) {
        this.resetToken = params.get('token');
        console.log("user setting component loaded");
    }

    public barChartOptions:any = {
        scaleShowVerticalLines: true,
        responsive: true
    };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label:'Series A'},
    ];

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

}
