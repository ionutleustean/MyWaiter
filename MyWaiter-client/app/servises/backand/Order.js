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
var Order = (function () {
    function Order(http) {
        this.http = http;
    }
    Order.prototype.getRestaurants = function () {
        var header = new http_1.Headers();
        header.append('AnonymousToken', ConfigBackand_1.ConfigBackand.anonymous_token);
        return this.http.get(ConfigBackand_1.ConfigBackand.api_url + '1/objects/Restaurants', {
            headers: header
        })
            .retry(3)
            .map(function (res) { return res.json().data.map(function (r) { return r; }); });
    };
    Order.prototype.getTables = function (restaurantId) {
        if (restaurantId != null || restaurantId != "") {
            var filter = JSON.stringify([{ "fieldName": "RestaurantId", "operator": "equals", "value": restaurantId }]);
            var header = new http_1.Headers();
            header.append('AnonymousToken', ConfigBackand_1.ConfigBackand.anonymous_token);
            return this.http.get(ConfigBackand_1.ConfigBackand.api_url + '1/objects/Tables?filter=' + encodeURI(filter), {
                headers: header
            })
                .retry(3)
                .map(function (res) { return res.json().data.map(function (r) { return r; }); });
        }
        else {
        }
    };
    Order.prototype.getMenu = function (restaurantId) {
        if (restaurantId != null || restaurantId != "") {
            var filter = JSON.stringify([
                { "fieldName": "RestaurantId", "operator": "equals", "value": restaurantId },
            ]);
            var header = new http_1.Headers();
            header.append('AnonymousToken', ConfigBackand_1.ConfigBackand.anonymous_token);
            return this.http.get(ConfigBackand_1.ConfigBackand.api_url + '1/objects/Products?filter=' + encodeURI(filter), {
                headers: header
            })
                .retry(3)
                .map(function (res) { return res.json().data.map(function (r) { return r; }); });
        }
        else {
        }
    };
    Order.prototype.logError = function (err) {
        console.error('Error: ' + err);
    };
    Order = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Order);
    return Order;
})();
exports.Order = Order;
