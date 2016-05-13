import {Page, NavController, NavParams} from 'ionic-angular';
import {Menu} from '../menu/menu'
import {Order} from '../../../servises/backand/Order';


@Page({
    templateUrl: 'build/pages/order/tables/tables.html',
    styleUrls: ['build/pages/order/tables/tables.css'],
    providers: [Order],
})


export class Tables {

    public restaurantId:string;
    public tables:any;

    constructor(private nav:NavController, navParams:NavParams, private order:Order) {


        this.restaurantId = navParams.get("restaurantId");


        this.tables = [];

        this.getTables(this.restaurantId);
    }

    getTables(restaurantId) {

        let color = ["#673bb7", "#dc4437", "#fe5722", "#e67e22", "#4385f5", "#009788"];

        this.order.getTables(restaurantId)
            .subscribe(data => {
                    this.tables = data;
                    for (let i = 0; i < data.length; i++) {
                        this.tables[i].color = color[Math.floor(Math.random() * color.length)];
                    }

                },
                err => this.logError(err)
            );
    }

    goToMenu( tableNr ){
      this.nav.push(Menu, {
        restaurantId: this.restaurantId,
        tableNr: tableNr,
      });
    }
    logError(err){}


}
