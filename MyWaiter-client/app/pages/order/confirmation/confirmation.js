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
var Order_1 = require('../../../servises/backand/Order');
var menu_1 = require('../menu/menu');
var Confirmation = (function () {
    function Confirmation(nav, navParams, order) {
        this.nav = nav;
        this.order = order;
        this.restaurantId = navParams.get("restaurantId");
        this.tableNr = navParams.get("tableNr");
    }
    Confirmation.prototype.goToProducts = function () {
        this.nav.push(menu_1.Menu, {
            restaurantId: this.restaurantId,
            tableNr: this.tableNr,
        });
    };
    Confirmation = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/order/confirmation/confirmation.html',
            styleUrls: ['build/pages/order/confirmation/confirmation.css'],
            providers: [Order_1.Order],
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, Order_1.Order])
    ], Confirmation);
    return Confirmation;
})();
exports.Confirmation = Confirmation;
// https://updates.push.services.mozilla.com/push/v1/gAAAAABXPLgZaj4MpAe1pnoyPC3L3SUKZl7vu1Hkfo3ebKi8QtA7Goo1K9k9rw2hSTjxLxysgW55b3P2z1s0Lx_5BlhnDlSPKgNEPqxcIvLrNTlIW76Rwl4GvNubSRfPNdXQKZIdhoXS" 
