import 'rxjs/Rx'
import {Http, Headers} from 'angular2/http'
import {Injectable} from 'angular2/core';
import {ConfigBackand} from '../vars/ConfigBackand'

@Injectable()


export class Order {

    header:Headers = new Headers();

    constructor(public http:Http) {

    }


    public getRestaurants() {


        this.header.append('AnonymousToken', ConfigBackand.anonymous_token);

        return this.http.get(ConfigBackand.api_url + '1/objects/Restaurant', {
            headers: this.header
        })
            .retry(3)
            .map(res => res.json().data.map(r => r))
    }


    public getTables() {

        this.header.append('AnonymousToken', ConfigBackand.anonymous_token);

        return this.http.get(ConfigBackand.api_url + '1/objects/Tables', {
            headers: this.header
        })
            .retry(3)
            .map(res => res.json().data.map(r => r))
    }


    logError(err) {
        console.error('Error: ' + err);
    }
}


