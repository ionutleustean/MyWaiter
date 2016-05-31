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
var ionic_native_1 = require('ionic-native');
var logIn_1 = require('../user/logIn/logIn');
var restaurants_1 = require('../order/restaurants/restaurants');
var menu_1 = require('../order/menu/menu');
var HomePage = (function () {
    function HomePage(nav, platform) {
        this.nav = nav;
        platform.ready().then(function () {
        });
    }
    HomePage.prototype.scan = function () {
        var _this = this;
        ionic_native_1.BarcodeScanner.scan()
            .then(function (result) {
            var params = result.text.split('_');
            var restaurantId = params[1];
            var tableNr = params[2];
            _this.goToMenu(restaurantId, tableNr);
        })
            .catch(function (error) { return console.debug("Error: ", error); });
    };
    HomePage.prototype.goToMenu = function (restaurantId, tableNr) {
        this.nav.push(menu_1.Menu, {
            restaurantId: restaurantId,
            tableNr: tableNr
        });
    };
    HomePage.prototype.goToRestaurants = function () {
        this.nav.push(restaurants_1.Restaurants);
    };
    HomePage.prototype.goToLogIn = function () {
        this.nav.push(logIn_1.LogIn);
    };
    HomePage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/homePage/homePage.html',
            styleUrls: ['build/pages/homePage/homePage.css']
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.Platform])
    ], HomePage);
    return HomePage;
})();
exports.HomePage = HomePage;
