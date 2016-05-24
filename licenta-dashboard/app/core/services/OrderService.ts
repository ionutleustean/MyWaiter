
import 'rxjs/Rx';
import {Http, Headers} from 'angular2/http';
import {Router} from "angular2/router";
import {Injectable} from 'angular2/core';
import {ConfigBackand} from '../vars/ConfigBackand';
import {RestaurantModel} from '../model/RestaurantModel';
import {Cookie} from './CookieService';


@Injectable()



export class OrderService {

    url:string = ConfigBackand.api_url + "1/objects/";
    header:Headers = new Headers();
    
    constructor(public http:Http, private router:Router) {


    }

    redirectLogin() {
        this.router.navigateByUrl("/login");
    }

    createRestaurant(restaurant: RestaurantModel) {
        
        this.header.append('Content-Type', 'application/json');
        this.header.append('AnonymousToken', ConfigBackand.anonymous_token);

        var $obs = this.http.post(this.url + "Restaurants", JSON.stringify(restaurant), {
            headers: this.header
        });
        return $obs;
        
    }
    


}
