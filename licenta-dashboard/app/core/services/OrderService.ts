import 'rxjs/Rx';
import {Http, Headers} from '@angular/http';
import {Router} from "@angular/router-deprecated";
import {Injectable} from '@angular/core';
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

    public createRestaurant(restaurant:RestaurantModel) {

        this.header.append('Content-Type', 'application/json');
        this.header.append('AnonymousToken', ConfigBackand.anonymous_token);

        var $obs = this.http.post(this.url + "Restaurants", JSON.stringify(restaurant), {
            headers: this.header
        });
        return $obs;

    }

    public getRestaurant() {

        
        let email = Cookie.getCookie("user_email");

        let query = JSON.stringify([{"fieldName": "UserMail", "operator": "equals", "value": email}]);

        this.header.append('Authorization', Cookie.getCookie("Authorization"));
        
        console.log(query);

        var $obs = this.http.get(ConfigBackand.api_url + "1/objects/Restaurants?filter=" + encodeURI(query), {
            headers: this.header
        });

     
        return $obs;
    }
    
    public addTable(RestaurantId:string, Seats:number, TableNumber:string) {
        
        let table = {
            RestaurantId : RestaurantId,
            Seats : Seats,
            TableNumber : TableNumber
        }

        this.header.append('Content-Type', 'application/json');
        this.header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.post(this.url + "Tables", JSON.stringify(table), {
            headers: this.header
        });
        return $obs;
        
        
    }
    


}
