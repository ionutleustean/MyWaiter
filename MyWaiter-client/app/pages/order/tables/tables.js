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
var menu_1 = require('../menu/menu');
var Order_1 = require('../../../servises/backand/Order');
var Tables = (function () {
    function Tables(nav, navParams, order) {
        this.nav = nav;
        this.order = order;
        this.restaurantId = navParams.get("restaurantId");
        this.tables = [];
        this.getTables(this.restaurantId);
    }
    Tables.prototype.getTables = function (restaurantId) {
        var _this = this;
        var color = ["#673bb7", "#dc4437", "#fe5722", "#e67e22", "#4385f5", "#009788"];
        this.order.getTables(restaurantId)
            .subscribe(function (data) {
            _this.tables = data;
            for (var i = 0; i < data.length; i++) {
                _this.tables[i].color = color[Math.floor(Math.random() * color.length)];
            }
        }, function (err) { return _this.logError(err); });
    };
    Tables.prototype.goToMenu = function (tableNr) {
        this.nav.push(menu_1.Menu, {
            restaurantId: this.restaurantId,
            tableNr: tableNr,
        });
    };
    Tables.prototype.logError = function (err) { };
    Tables = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/order/tables/tables.html',
            styleUrls: ['build/pages/order/tables/tables.css'],
            providers: [Order_1.Order],
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, Order_1.Order])
    ], Tables);
    return Tables;
})();
exports.Tables = Tables;
// https://updates.push.services.mozilla.com/push/v1/gAAAAABXPLgZaj4MpAe1pnoyPC3L3SUKZl7vu1Hkfo3ebKi8QtA7Goo1K9k9rw2hSTjxLxysgW55b3P2z1s0Lx_5BlhnDlSPKgNEPqxcIvLrNTlIW76Rwl4GvNubSRfPNdXQKZIdhoXS" 
