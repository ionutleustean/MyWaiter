
import 'rxjs/Rx'
import {Http, Response, Headers, RequestOptions} from 'angular2/http'
import {Injectable} from 'angular2/core';
import {ConfigBackand} from '../vars/ConfigBackand'
import {UserModel} from '../../model/UserModel';


@Injectable()



export class User {

    url:string;
    header:Headers = new Headers();
    private auth_token:{ header_name:string, header_value:string} = {header_name: '', header_value: ''};


    constructor(public http:Http) {

    }



    public createUser(user:UserModel) {




        this.url = ConfigBackand.api_url + "1/user/signup";

        this.header.append('Content-Type', 'application/json');
        this.header.append('SignUpToken', ConfigBackand.signUpToken);



        var $obs = this.http.post(this.url, JSON.stringify(user), {
                headers: this.header
            })
            // .map(res => this.getToken(res));


        $obs.subscribe(
            data => {
                // this.setTokenHeader(data)
            },
            err => {

            },
            () => console.log('Finish Auth'));

        return $obs;

    }

    private getToken(res) {
        console.log(res);
        return res.json().access_token;
    }

    private setTokenHeader(jwt) {
        if (jwt) {
            this.auth_token.header_name = "Authorization";
            this.auth_token.header_value = "Bearer " + jwt;
            //localStorage.setItem('jwt', jwt);
        }
    }


    logError(err) {
        console.error('Error: ' + err);
    }
}
