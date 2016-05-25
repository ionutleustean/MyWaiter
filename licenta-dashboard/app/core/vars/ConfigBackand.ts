import 'rxjs/Rx'

export module ConfigBackand {
    
    export const api_url:string = "https://api.backand.com:443/";
    export const app_name:string = "mywaiter";
    export const auth_status:string = "";
    export const is_auth_error:boolean = false;
    export const auth_token:{ header_name:string, header_value:string} = {header_name: '', header_value: ''};
    export const signUpToken:string = "61020a95-69d0-4336-b089-20d48e534729";
    export const anonymous_token:string =  "0cdb226d-b135-4c20-98bb-c091f408bc0a";

}
