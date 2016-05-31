
import 'rxjs/Rx'
import {Http} from 'angular2/http'
import {Injectable} from 'angular2/core';
import {ConfigBackand} from '../vars/ConfigBackand'

@Injectable()
export class Example {


    constructor(public http:Http) {

    }


    config:ConfigBackand = new ConfigBackand();


    public postItem(name) {


        let data = JSON.stringify({description: name});

        return this.http.post( this.config.api_url + '/1/objects/todo?returnObject=true', data,
            {
                headers: this.authHeader
            })
            .retry(3)
            .map(res => {
                console.log(res.json());
                return res.json();
            });



    }

    public getQuote() {

        return this.http.get( this.config.api_url + '/1/objects/todo?returnObject=true', {
                headers: this.authHeader
            })
            .retry(3)
            .map(res => res.json().data.map(r =>
                r.description
            ))

    }



    logError(err) {
        console.error('Error: ' + err);
    }
}
