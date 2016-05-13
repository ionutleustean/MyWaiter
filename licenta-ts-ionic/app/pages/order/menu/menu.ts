import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../../servises/backand/Order';


@Page({
    templateUrl: 'build/pages/order/menu/menu.html',
    styleUrls: ['build/pages/order/menu/menu.css'],
    providers: [Order],
})
export class Menu {

    private restaurantId:string;
    private tableNr:string;

    public menu:any;


    constructor(private nav:NavController, navParams:NavParams, private order:Order) {
        this.restaurantId = navParams.get("restaurantId");
        this.tableNr = navParams.get("tableNr");


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

    logError(err) {
    }

}
