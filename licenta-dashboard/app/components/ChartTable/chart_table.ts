"use strict";

import {Component , Input,  OnInit, ViewEncapsulation} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {MATERIAL_DIRECTIVES} from "../../../node_modules/ng2-material/index";
import {CHART_DIRECTIVES} from '../../../node_modules/ng2-charts/ng2-charts';



@Component({
    selector: "chart-table",
    templateUrl: "components/ChartTable/chart_table.template.html",
    directives: [MATERIAL_DIRECTIVES,NgClass, CHART_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [],
    encapsulation: ViewEncapsulation.None

})
export class ChartTable {


    @Input() type:string ;
    @Input() title:string ;
    @Input() data:any[] ;
    @Input() labels:string[] ;



    constructor( ) {
    }

    public options:any = {
        scaleShowVerticalLines: true,
        responsive: true
    };
    public legend:boolean = true;

 

    // events
    public chartClicked(e:any):void {
        // console.log(e);
    }

    public chartHovered(e:any):void {
        // console.log(e);
    }

}
