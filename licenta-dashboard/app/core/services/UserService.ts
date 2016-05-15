
import 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {ConfigBackand} from '../vars/ConfigBackand';
import {UserModel} from '../model/UserModel';
import {Cookie} from './CookieService';


@Injectable()



export class UserService {

    url:string = ConfigBackand.api_url + "1/user/";
    header:Headers = new Headers();
    private auth_token:{ header_name:string, header_value:string} = {header_name: '', header_value: ''};


    constructor(public http:Http) {

    }

    
    
    
    

    public createUser(user:UserModel) {
        

        this.header.append('Content-Type', 'application/json');
        this.header.append('SignUpToken', ConfigBackand.signUpToken);
        
        var $obs = this.http.post(this.url + "signup", JSON.stringify(user), {
                headers: this.header
            });

        $obs.subscribe(
            data => {
               // console.log(data)
            },
            err => {
                // console.log(err)
            },
            () => {
                // console.log('Finish Auth')
            });

        return $obs;
        
    }


    public login(user:{username:string, password:string}) {
        
        let creds = `username=${ encodeURIComponent(user.username)}` +
            `&password=${user.password}` +
            `&appName=${ConfigBackand.app_name}` +
            `&grant_type=password`;
        
        let header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');

        var $obs = this.http.post("https://api.backand.com/" + "token", creds, {
            headers: header
        })
            .map(res => this.getToken(res));


        $obs.subscribe(
            data => {
                this.setTokenHeader(data)
                console.log(data);
            },
            err => {
                console.log(err);

            },
            () => console.log('Finish Auth'));

        return $obs;

    }
    
    public logout() {
        Cookie.deleteCookie(this.auth_token.header_name)
    }
    
    public requestResetPassword(username) {
        
        let data = {
            appName: ConfigBackand.app_name,
            username: encodeURIComponent(username)
        };

        var $obs = this.http.post(this.url + "requestResetPassword", JSON.stringify(data), {});

        $obs.subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err);

            },
            () => console.log('Finish request'));

        return $obs;
        
    }
    
    
    public resetPassword(password, token) {
        
        let data = {
            resetToken: encodeURIComponent(token),
            newPassword: encodeURIComponent(password)
        };

        var $obs = this.http.post(this.url + "resetPassword", JSON.stringify(data), {});

        $obs.subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err);

            },
            () => console.log('Finish request'));

        return $obs;
        
    }
    

    private getToken(res) {
        // console.log(res);
        return res.json().access_token;
    }

    private setTokenHeader(jwt) {
        if (jwt) {
            this.auth_token.header_name = "Authorization";
            this.auth_token.header_value = "Bearer " + jwt;
            //localStorage.setItem('jwt', jwt);
            
            Cookie.setCookie(this.auth_token.header_name, this.auth_token.header_value);

        }
    }
    
    public printToken(){
        console.log(this.auth_token)
    }
    
    


    logError(err) {
        console.error('Error: ' + err);
    }
}
