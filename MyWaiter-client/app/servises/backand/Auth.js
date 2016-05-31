var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/Rx');
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var ConfigBackand_1 = require('../vars/ConfigBackand');
var Auth = (function () {
    function Auth(http) {
        this.http = http;
        this.config = new ConfigBackand_1.ConfigBackand();
        this.api_url = this.config.api_url;
        this.auth_status = this.config.auth_status;
        this.auth_token = this.config.auth_token;
    }
    Object.defineProperty(Auth.prototype, "tokenUrl", {
        get: function () {
            return this.api_url + "/token";
        },
        enumerable: true,
        configurable: true
    });
    Auth.prototype.getAuthTokenSimple = function (username, password) {
        var _this = this;
        var creds = ("username=" + username) +
            ("&password=" + password) +
            ("&appName=" + this.app_name) +
            "&grant_type=password";
        console.log(creds);
        var header = new http_1.Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        var $obs = this.http.post(this.tokenUrl, creds, {
            headers: header
        })
            .map(function (res) { return _this.getToken(res); });
        $obs.subscribe(function (data) {
            _this.setTokenHeader(data);
        }, function (err) {
        }, function () { return console.log('Finish Auth'); });
        return $obs;
    };
    Auth.prototype.extractErrorMessage = function (err) {
        return JSON.parse(err._body).error_description;
    };
    Auth.prototype.useAnoymousAuth = function () {
        this.setAnonymousHeader();
    };
    Auth.prototype.setTokenHeader = function (jwt) {
        if (jwt) {
            this.auth_token.header_name = "Authorization";
            this.auth_token.header_value = "Bearer " + jwt;
        }
    };
    Auth.prototype.setAnonymousHeader = function () {
        this.auth_status = "OK";
        this.auth_token.header_name = "AnonymousToken";
        this.auth_token.header_value = "08fd510a-4b52-43fa-938f-f2c841bd3106";
    };
    Auth.prototype.getToken = function (res) {
        console.log(res);
        return res.json().access_token;
    };
    Object.defineProperty(Auth.prototype, "authHeader", {
        get: function () {
            var authHeader = new http_1.Headers();
            authHeader.append(this.auth_token.header_name, this.auth_token.header_value);
            return authHeader;
        },
        enumerable: true,
        configurable: true
    });
    Auth.prototype.logError = function (err) {
        console.error('Error: ' + err);
    };
    Auth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Auth);
    return Auth;
})();
exports.Auth = Auth;
