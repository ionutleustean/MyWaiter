require('rxjs/Rx');
var ConfigBackand;
(function (ConfigBackand) {
    ConfigBackand.api_url = "https://api.backand.com:443/";
    ConfigBackand.app_name = "myWaiter";
    ConfigBackand.auth_status = "";
    ConfigBackand.is_auth_error = false;
    ConfigBackand.auth_token = { header_name: '', header_value: '' };
    ConfigBackand.signUpToken = "61020a95-69d0-4336-b089-20d48e534729";
    ConfigBackand.anonymous_token = "0cdb226d-b135-4c20-98bb-c091f408bc0a";
})(ConfigBackand = exports.ConfigBackand || (exports.ConfigBackand = {}));
