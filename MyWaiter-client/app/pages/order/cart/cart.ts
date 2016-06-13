import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../../servises/backand/Order';
import {Confirmation} from '../confirmation/confirmation';


@Page({
    templateUrl: 'build/pages/order/cart/cart.html',
    styleUrls: ['build/pages/order/cart/cart.css'],
    providers: [Order],
})
export class Cart {

    public orders:any = [];
    public total:number = 0;

    public restaurant:any;

    constructor(private nav:NavController, navParams:NavParams, private order:Order) {
        this.restaurantId = navParams.get("restaurantId");
        this.tableNr = navParams.get("tableNr");
        this.orders = navParams.get("orders");


        order.getRestaurantById(this.restaurantId)
            .subscribe(
                data => this.restaurant = data
            );


        this.calculateTotal();


    }


    calculateTotal() {
        this.total = 0;

        for (let i = 0; i < this.orders.length; i++) {
            this.total += Number(this.orders[i].Price);
        }
    }


    removeProductFromCart(index) {
        this.orders.splice(index, 1);
        this.calculateTotal();
    }

    addOrder() {
        console.log(this.restaurant);

        if(this.restaurant) {
            this.order.addOrder(this.restaurant.UserMail, this.tableNr, this.orders)
                .subscribe();

            this.order.sendNotification(this.restaurant.UserMail, this.tableNr)
                .subscribe();

            this.nav.push(Confirmation, {
                restaurantId: this.restaurantId,
                tableNr: this.tableNr,
            });

        }
        else{


            setTimeout(
                () => {
                    this.addOrder();
                }, 100);
        }


    }

    logError(err) {

    }

}


