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
var User = (function () {
    function User(http) {
        this.http = http;
        this.header = new http_1.Headers();
        this.auth_token = { header_name: '', header_value: '' };
    }
    User.prototype.createUser = function (user) {
        this.url = ConfigBackand_1.ConfigBackand.api_url + "1/user/signup";
        this.header.append('Content-Type', 'application/json');
        this.header.append('SignUpToken', ConfigBackand_1.ConfigBackand.signUpToken);
        var $obs = this.http.post(this.url, JSON.stringify(user), {
            headers: this.header
        });
        // .map(res => this.getToken(res));
        $obs.subscribe(function (data) {
            // this.setTokenHeader(data)
        }, function (err) {
        }, function () { return console.log('Finish Auth'); });
        return $obs;
    };
    User.prototype.getToken = function (res) {
        console.log(res);
        return res.json().access_token;
    };
    User.prototype.setTokenHeader = function (jwt) {
        if (jwt) {
            this.auth_token.header_name = "Authorization";
            this.auth_token.header_value = "Bearer " + jwt;
        }
    };
    User.prototype.logError = function (err) {
        console.error('Error: ' + err);
    };
    User = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], User);
    return User;
})();
exports.User = User;
