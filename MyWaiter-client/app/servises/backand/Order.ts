///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
import 'rxjs/Rx'
import {Http, Headers} from 'angular2/http'
import {Injectable} from 'angular2/core';
import {ConfigBackand} from '../vars/ConfigBackand'
import {Observable} from "rxjs/Rx";

@Injectable()


export class Order {


    constructor(public http:Http) {

    }


    public getRestaurants() {

        let header:Headers = new Headers();

        header.append('AnonymousToken', ConfigBackand.anonymous_token);

        return this.http.get(ConfigBackand.api_url + '1/objects/Restaurants', {
            headers: header
        })
            .retry(3)
            .map(res => res.json().data.map(r => r))
    }


    public getTables(restaurantId) {

        if (restaurantId != null || restaurantId != "") {
            let filter = JSON.stringify([{"fieldName": "RestaurantId", "operator": "equals", "value": restaurantId}]);

            let header:Headers = new Headers();

            header.append('AnonymousToken', ConfigBackand.anonymous_token);

            return this.http.get(ConfigBackand.api_url + '1/objects/Tables?filter=' + encodeURI(filter), {
                headers: header
            })
                .retry(3)
                .map(res => res.json().data.map(r => r))
        }
        else {

        }
    }

    public getMenu(restaurantId) {

        if (restaurantId != null || restaurantId != "") {
            let filter = JSON.stringify([
                {"fieldName": "RestaurantId", "operator": "equals", "value": restaurantId},
            ]);

            let header:Headers = new Headers();
            header.append('AnonymousToken', ConfigBackand.anonymous_token);

            return this.http.get(ConfigBackand.api_url + '1/objects/Products?filter=' + encodeURI(filter), {
                headers: header
            })
                .retry(3)
                .map(res => res.json().data.map(r => r))
        }
        else {

        }
    }



    public updateProduct(id, product) {


        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('AnonymousToken', ConfigBackand.anonymous_token);

        var $obs = this.http.put(ConfigBackand.api_url + '1/objects/Products/' + encodeURI(id), JSON.stringify(product), {
            headers: header
        });

        return $obs;
    }




    public getRestaurantById(RestaurantId:string) {

        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('AnonymousToken', ConfigBackand.anonymous_token);

        return this.http.get(ConfigBackand.api_url + '1/objects/Restaurants/' + RestaurantId, {headers: header})
            .map(res => res.json())


    }


    public sendNotification(RestaurantEmail:string, TableNr:string) {


        let parameters = JSON.stringify({
            restaurant: RestaurantEmail,
            tableNr: TableNr
        });


        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('AnonymousToken', ConfigBackand.anonymous_token);

        return this.http.get(ConfigBackand.api_url + '1/objects/action/Order/?name=SendRealtimeEvent&parameters=' + encodeURI(parameters), {headers: header})
            .map(res => res.json())


    }

    public addOrder(RestaurantEmail:string, TableNumber:string, orders:any) {


        let header:Headers = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('AnonymousToken', ConfigBackand.anonymous_token);


        let order_details = {
            RestaurantEmail: RestaurantEmail,
            TableNumber: TableNumber,
            Processing: false,
            Done: false
        }

        return this.http.post(ConfigBackand.api_url + "1/objects/Order", JSON.stringify(order_details), {headers: header})

            .map(res => res.json().__metadata.id)


            .map(orderId => {
                orders.map(product => {

                    let order_product = {
                        ProductId: product.id,
                        Quantity: 1,
                        OrdersId: orderId
                    };

                    console.log(order_product)

                    this.http.post(ConfigBackand.api_url + "1/objects/OrdersProducts", JSON.stringify(order_product), {headers: header})
                        .subscribe();
                });

                return 'done'

            })


    }


    logError(err) {
        console.error('Error: ' + err);
    }


}


