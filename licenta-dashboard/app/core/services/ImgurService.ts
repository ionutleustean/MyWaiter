import 'rxjs/Rx';
import {Http, Headers} from '@angular/http';
import {Router} from "@angular/router-deprecated";
import {Injectable} from '@angular/core';
import {ConfigBackand} from '../vars/ConfigBackand';
import {ConfigImgur} from "../vars/ConfigImgur"
import {Cookie} from './CookieService';


@Injectable()


export class ImgurService {


    constructor(public http:Http, private router:Router) {


    }


    public addImage(file) {

        return new Promise((resolve, reject) => {
           let xhr = new XMLHttpRequest();

                
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {

                        resolve(JSON.parse(xhr.response));

                        console.log(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                        console.log(xhr.response);
                    }
                }
            };

            xhr.open('POST', "https://api.imgur.com/3/image", true);
            xhr.setRequestHeader("Authorization", 'Client-ID ' + ConfigImgur.id);
            xhr.send(file);
        });


        // return $obs;
    }

    // public addProduct(product: ProductsModel) {
    //
    //     product.RestaurantId = Cookie.getCookie("restaurant_id");
    //
    //     let header:Headers = new Headers();
    //
    //     header.append('Content-Type', 'application/json');
    //     header.append('Authorization', Cookie.getCookie("Authorization"));
    //
    //
    //     var $obs = this.http.post(ConfigBackand.api_url + "1/objects/Products", JSON.stringify(product), {
    //         headers: header
    //     });
    //     return $obs;
    // }
    //
    //
    // public getProducts() {
    //
    //     let restaurantId = Cookie.getCookie("restaurant_id");
    //
    //     let query = JSON.stringify([{"fieldName": "RestaurantId", "operator": "equals", "value": restaurantId}]);
    //
    //     let header:Headers = new Headers();
    //
    //     header.append('Content-Type', 'application/json');
    //     header.append('Authorization', Cookie.getCookie("Authorization"));
    //
    //     var $obs = this.http.get(ConfigBackand.api_url + "1/objects/Products?filter=" + encodeURI(query), {
    //         headers: header
    //     });
    //
    //     return $obs;
    //
    // }
    //
    //
    // public deleteProduct(id:string) {
    //
    //     let header:Headers = new Headers();
    //
    //     header.append('Content-Type', 'application/json');
    //     header.append('Authorization', Cookie.getCookie("Authorization"));
    //
    //     var $obs = this.http.delete(ConfigBackand.api_url + "1/objects/Products/" + encodeURI(id), {
    //         headers: header
    //     });
    //
    //     return $obs;
    // }


}
