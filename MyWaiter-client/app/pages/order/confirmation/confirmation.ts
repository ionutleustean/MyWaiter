import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../../servises/backand/Order';
import {Menu} from '../menu/menu'



@Page({
    templateUrl: 'build/pages/order/confirmation/confirmation.html',
    styleUrls: ['build/pages/order/confirmation/confirmation.css'],
    providers: [Order],
})


export class Confirmation {


    constructor(private nav:NavController, navParams:NavParams, private order:Order) {
        this.restaurantId = navParams.get("restaurantId");
        this.tableNr = navParams.get("tableNr");

    }

    goToProducts(){
        this.nav.push(Menu, {
            restaurantId: this.restaurantId,
            tableNr: this.tableNr,
        });
    }


}


// https://updates.push.services.mozilla.com/push/v1/gAAAAABXPLgZaj4MpAe1pnoyPC3L3SUKZl7vu1Hkfo3ebKi8QtA7Goo1K9k9rw2hSTjxLxysgW55b3P2z1s0Lx_5BlhnDlSPKgNEPqxcIvLrNTlIW76Rwl4GvNubSRfPNdXQKZIdhoXS"