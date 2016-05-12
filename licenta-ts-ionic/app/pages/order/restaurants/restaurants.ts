import {Page, NavController} from 'ionic-angular';
// import {Tables} from '../tables/tables'
import {RestaurantModel} from '../../../model/RestaurantModel'
import {Order} from '../../../servises/backand/Order';


@Page({
    templateUrl: 'build/pages/order/restaurants/restaurants.html',
    styleUrls: ['build/pages/order/restaurants/restaurants.css'],
    providers: [Order],

})
export class Restaurants {


    public restaurants:any;

    constructor(nav:NavController, private order:Order) {

        this.restaurants = [];


        this.getRestaurants();

    }


    getRestaurants() {

        this.order.getRestaurants()
            .subscribe(data => {
                    this.restaurants = data;
                },
                err => this.logError(err)
            );

    }

    updateImgSrc(index) {
        console.log(this.restaurants[index]);
        this.restaurants[index].Image = "http://www.restaurantginger.ro/images/416_1zinc.jpg";
    }

    // goToTables(restaurantId){
    //   this.nav.push(Tables, {
    //     restaurantId: restaurantId,
    //   });
    // }


}
