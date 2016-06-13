import 'rxjs/Rx';
import {Http, Headers} from '@angular/http';
import {Router} from "@angular/router-deprecated";
import {Injectable} from '@angular/core';
import {ConfigBackand} from '../vars/ConfigBackand';
import {RestaurantModel} from '../model/RestaurantModel';
import {ProductsModel} from '../model/ProductsModel';
import {Cookie} from './CookieService';


@Injectable()


export class OrderService {

    url:string = ConfigBackand.api_url + "1/objects/";

    constructor(public http:Http, private router:Router) {


    }

    redirectLogin() {
        this.router.navigateByUrl("/login");
    }

    public createRestaurant(restaurant:RestaurantModel) {


        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('AnonymousToken', ConfigBackand.anonymous_token);

        var $obs = this.http.post(this.url + "Restaurants", JSON.stringify(restaurant), {
            headers: header
        });
        return $obs;

    }

    
    public updateRestaurant(id, restaurant) {
    
    
        let header:Headers = new Headers();
    
        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));
    
        var $obs = this.http.put(this.url + "Restaurants/" + encodeURI(id), JSON.stringify(restaurant), {
            headers: header
        });
    
        return $obs;
    }

    public getRestaurant() {


        let email = Cookie.getCookie("user_email");

        let query = JSON.stringify([{"fieldName": "UserMail", "operator": "equals", "value": email}]);

        let header:Headers = new Headers();

        header.append('Authorization', Cookie.getCookie("Authorization"));

        console.log(query);

        var $obs = this.http.get(ConfigBackand.api_url + "1/objects/Restaurants?filter=" + encodeURI(query), {
            headers: header
        });


        return $obs;
    }

    public addTable(table:{ TableNumber:string, Seats:string }) {

        let query = {
            RestaurantId: Cookie.getCookie("restaurant_id"),
            Seats: table.Seats,
            TableNumber: table.TableNumber
        };

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));


        var $obs = this.http.post(ConfigBackand.api_url + "1/objects/Tables", JSON.stringify(query), {
            headers: header
        });
        return $obs;
    }

    public getTable() {

        let restaurantId = Cookie.getCookie("restaurant_id");

        let query = JSON.stringify([{"fieldName": "RestaurantId", "operator": "equals", "value": restaurantId}]);

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.get(ConfigBackand.api_url + "1/objects/Tables?filter=" + encodeURI(query), {
            headers: header
        });

        return $obs;

    }

    public deleteTable(id:string) {

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.delete(ConfigBackand.api_url + "1/objects/Tables/" + encodeURI(id), {
            headers: header
        });

        return $obs;
    }


    public editTable(id:string, table:{TableNumber:string, Seats:string}) {


        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.put(ConfigBackand.api_url + "1/objects/Tables/" + encodeURI(id), JSON.stringify(table), {
            headers: header
        });

        return $obs;
    }

    public addProduct(product:ProductsModel) {

        product.RestaurantId = Cookie.getCookie("restaurant_id");

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));


        var $obs = this.http.post(ConfigBackand.api_url + "1/objects/Products", JSON.stringify(product), {
            headers: header
        });
        return $obs;
    }


    public getProducts() {

        let restaurantId = Cookie.getCookie("restaurant_id");

        let query = JSON.stringify([{"fieldName": "RestaurantId", "operator": "equals", "value": restaurantId}]);

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.get(ConfigBackand.api_url + "1/objects/Products?filter=" + encodeURI(query), {
            headers: header
        });

        return $obs;

    }

    public editProduct(id:string, product:ProductsModel) {

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.put(ConfigBackand.api_url + "1/objects/Products/" + encodeURI(id), JSON.stringify(product), {
            headers: header
        });

        return $obs;

    }

    public deleteProduct(id:string) {

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.delete(ConfigBackand.api_url + "1/objects/Products/" + encodeURI(id), {
            headers: header
        });

        return $obs;
    }


    public getOrders() {


        let query = JSON.stringify([{"fieldName": "Done", "operator": "equals", "value": false}]);

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.get(ConfigBackand.api_url + "1/objects/Order?filter=" + encodeURI(query), {
            headers: header
        })

        return $obs;

    }

    public getOrderProducts(id) {
        
        let parameters = JSON.stringify({
            id: id,
        });
        
        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        return this.http.get(ConfigBackand.api_url + "1/query/data/getOrderProducts?parameters=" + encodeURI(parameters), {
            headers: header
        });
        
    }  
    
    public getProductsOrderCount() {
        
        
        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));
        
        return this.http.get(ConfigBackand.api_url + "1/query/data/getProductsOrderCount" , {
            headers: header
        });
        
    }
    
    public getTableOrderCount() {
        
        
        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));
        
        return this.http.get(ConfigBackand.api_url + "1/query/data/getOrderTableCount" , {
            headers: header
        });
        
    }

    

    public processOrder(id:string) {

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.put(ConfigBackand.api_url + "1/objects/Order/" + encodeURI(id), JSON.stringify({"Processing": "true"}), {
            headers: header
        });

        return $obs;

    }   
    
    public finishOrder(id:string) {

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Authorization', Cookie.getCookie("Authorization"));

        var $obs = this.http.put(ConfigBackand.api_url + "1/objects/Order/" + encodeURI(id), JSON.stringify({"Done": "true"}), {
            headers: header
        });

        return $obs;

    }
    
}
