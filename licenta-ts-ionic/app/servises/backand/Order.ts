import 'rxjs/Rx'
import {Http, Headers} from 'angular2/http'
import {Injectable} from 'angular2/core';
import {ConfigBackand} from '../vars/ConfigBackand'

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

        if (restaurantId != null || restaurantId != "")
        {
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

        if (restaurantId != null || restaurantId != "")
        {
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


    logError(err) {
        console.error('Error: ' + err);
    }
}


