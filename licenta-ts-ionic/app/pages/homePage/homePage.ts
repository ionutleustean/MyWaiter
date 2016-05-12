import {Page, NavController, Platform} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import {LogIn} from '../user/logIn/logIn';
import {Restaurants} from '../order/restaurants/restaurants';
// import {Menu} from '../order/menu/menu';


@Page({
    templateUrl: 'build/pages/homePage/homePage.html',
    styleUrls: ['build/pages/homePage/homePage.css']
})
export class HomePage {

    public nav:NavController;

    constructor(nav:NavController, platform:Platform) {
        this.nav = nav;


        platform.ready().then(() => {


        });

    }

    scan() {


        BarcodeScanner.scan()
            .then((result) => {
                var params = result.text.split('_');
                var restaurantId = params[1];
                var tableNr = params[2];

                // this.goToMenu(restaurantId, tableNr)
            })
            .catch((error) => console.debug("Error: ", error));
    }


//
// goToMenu(restaurantId, tableNr) {
//   this.nav.push(Menu, {
//     restaurantId: restaurantId,
//     tableNr: tableNr
//   });
// }


    goToRestaurants() {
        this.nav.push(Restaurants);
    }


    goToLogIn() {
        this.nav.push(LogIn);
    }


}
