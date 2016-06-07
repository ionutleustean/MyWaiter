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
var Cart = (function () {
    function Cart(nav, navParams, order) {
        var _this = this;
        this.nav = nav;
        this.order = order;
        this.orders = [];
        this.total = 0;
        this.restaurantId = navParams.get("restaurantId");
        this.tableNr = navParams.get("tableNr");
        this.orders = navParams.get("orders");
        order.getRestaurantById(this.restaurantId)
            .subscribe(function (data) { return _this.restaurant = data; });
        this.calculateTotal();
    }
    Cart.prototype.calculateTotal = function () {
        this.total = 0;
        for (var i = 0; i < this.orders.length; i++) {
            this.total += Number(this.orders[i].Price);
        }
    };
    Cart.prototype.removeProductFromCart = function (index) {
        this.orders.splice(index, 1);
        this.calculateTotal();
    };
    Cart.prototype.addOrder = function () {
        console.log(this.restaurant);
        this.order.addOrder(this.restaurant.UserMail, this.tableNr, this.orders)
            .subscribe();
        this.order.sendNotification(this.restaurant.UserMail, this.tableNr)
            .subscribe();
    };
    Cart.prototype.goBack = function () {
        this.nav.push(menu_1.Menu, {
            orders: this.orders,
            restaurantId: this.restaurantId,
            tableNr: this.tableNr,
        });
    };
    Cart.prototype.logError = function (err) {
    };
    Cart = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/order/cart/cart.html',
            styleUrls: ['build/pages/order/cart/cart.css'],
            providers: [Order_1.Order],
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, Order_1.Order])
    ], Cart);
    return Cart;
})();
exports.Cart = Cart;
