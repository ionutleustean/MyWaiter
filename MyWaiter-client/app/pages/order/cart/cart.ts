import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../../servises/backand/Order';
import {Menu} from '../menu/menu'


@Page({
    templateUrl: 'build/pages/order/cart/cart.html',
    styleUrls: ['build/pages/order/cart/cart.css'],
    providers: [Order],
})
export class Cart {

    public orders:any = [];
    public total:number = 0;

    constructor(private nav:NavController, navParams:NavParams, private order:Order) {
        this.restaurantId = navParams.get("restaurantId");
        this.tableNr = navParams.get("tableNr");
        this.orders = navParams.get("orders");



        this.calculateTotal();


    }


    calculateTotal() {
        this.total = 0;

        for(let i = 0; i < this.orders.length; i++){
            this.total += Number(this.orders[i].Price);
        }
    }


    removeProductFromCart( index ){
        this.orders.splice(index, 1);
        this.calculateTotal();
    }

    goBack(){
        this.nav.push(Menu, {
            orders: this.orders,
            restaurantId: this.restaurantId,
            tableNr: this.tableNr,
        });
    }




    logError(err) {
    }

}
