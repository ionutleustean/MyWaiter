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
var ionic_angular_1 = require('ionic-angular');
var tables_1 = require('../tables/tables');
var Order_1 = require('../../../servises/backand/Order');
var Restaurants = (function () {
    function Restaurants(nav, order) {
        this.nav = nav;
        this.order = order;
        this.restaurants = [];
        this.getRestaurants();
    }
    Restaurants.prototype.getRestaurants = function () {
        var _this = this;
        this.order.getRestaurants()
            .subscribe(function (data) {
            _this.restaurants = data;
        }, function (err) { return _this.logError(err); });
    };
    Restaurants.prototype.updateImgSrc = function (index) {
        this.restaurants[index].Image = "http://www.restaurantginger.ro/images/416_1zinc.jpg";
    };
    Restaurants.prototype.goToTables = function (restaurantId) {
        this.nav.push(tables_1.Tables, {
            restaurantId: restaurantId,
        });
    };
    Restaurants.prototype.logError = function (err) { };
    Restaurants = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/order/restaurants/restaurants.html',
            styleUrls: ['build/pages/order/restaurants/restaurants.css'],
            providers: [Order_1.Order],
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, Order_1.Order])
    ], Restaurants);
    return Restaurants;
})();
exports.Restaurants = Restaurants;
