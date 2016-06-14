import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../../servises/backand/Order';
import {Cart} from '../cart/cart';
import {Tables} from '../tables/tables';


@Page({
    templateUrl: 'build/pages/order/menu/menu.html',
    styleUrls: ['build/pages/order/menu/menu.css'],
    providers: [Order],
})
export class Menu {

    private restaurantId:string;
    private tableNr:string;
    public menu:any;

    public orders:any = [];

    constructor(private nav:NavController, navParams:NavParams, private order:Order) {
        this.restaurantId = navParams.get("restaurantId");
        this.tableNr = navParams.get("tableNr");

        if(navParams.get("orders")) {
            this.orders = navParams.get("orders");
        };


        this.menu = [];

        this.getMenu(this.restaurantId);
    }

    getMenu(restaurantId) {
        

        this.order.getMenu(restaurantId)
            .subscribe(data => {
                    this.menu = data;

                    for (let i = 0; i < data.length; i++) {
                        this.menu[i].desc = data[i].ShortDescription;
                        this.menu[i].descIcon = "chevron-down";
                        this.menu[i].descVisibility = false;
                        this.menu[i].isLiked = false;
                        if(!this.menu[i].Rating){
                            this.menu[i].Rating = 0;
                        }
                    }
                },
                err => this.logError(err)
            );


    }


    updateImgSrc(index) {
        this.menu[index].Image = "http://kingofwallpapers.com/food/food-023.jpg";
    }

    toggleDescription(index) {

        console.log(index);
        this.menu[index].descVisibility = !this.menu[index].descVisibility;

        if(this.menu[index].descVisibility === false){
            this.menu[index].desc = this.menu[index].ShortDescription;
            this.menu[index].descIcon = "chevron-down";
        }
        else {
            this.menu[index].desc = this.menu[index].Description;
            this.menu[index].descIcon = "chevron-up";
        }

    }


    toggleLike(index){

        if(this.menu[index].isLiked){
            this.menu[index].Rating--;
        }
        else {
            this.menu[index].Rating++;
        }

        this.order.updateProduct(this.menu[index].id, this.menu[index]).subscribe();

        this.menu[index].isLiked = !this.menu[index].isLiked;

    }

    addOrder(product) {
        console.log(product);
        this.orders.push(product);
    }

    goToCart(){
        
        this.nav.push(Cart, {
            orders: this.orders,
            restaurantId: this.restaurantId,
            tableNr: this.tableNr,
        });
    }

    logError(err) {
    }

}
