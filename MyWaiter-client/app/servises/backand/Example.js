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
var Example = (function () {
    function Example(http) {
        this.http = http;
        this.config = new ConfigBackand_1.ConfigBackand();
    }
    Example.prototype.postItem = function (name) {
        var data = JSON.stringify({ description: name });
        return this.http.post(this.config.api_url + '/1/objects/todo?returnObject=true', data, {
            headers: this.authHeader
        })
            .retry(3)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    Example.prototype.getQuote = function () {
        return this.http.get(this.config.api_url + '/1/objects/todo?returnObject=true', {
            headers: this.authHeader
        })
            .retry(3)
            .map(function (res) { return res.json().data.map(function (r) {
            return r.description;
        }); });
    };
    Example.prototype.logError = function (err) {
        console.error('Error: ' + err);
    };
    Example = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Example);
    return Example;
})();
exports.Example = Example;
