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
var homePage_1 = require('../../homePage/homePage');
var register_1 = require('../register/register');
var LogIn = (function () {
    function LogIn(nav) {
        this.nav = nav;
    }
    LogIn.prototype.goToHomePage = function () {
        this.nav.push(homePage_1.HomePage);
    };
    LogIn.prototype.goToRegister = function () {
        this.nav.push(register_1.Register);
    };
    LogIn.prototype.logIn = function () {
        // Parse.UserModel.logIn(this.username, this.password, {
        //   success: function (user) {
        //     alert("success");
        //   },
        //   error: function (user, error) {
        //     // The login failed. Check error to see why.
        //   }
        // });
    };
    LogIn = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/user/logIn/logIn.html',
            styleUrls: ['build/pages/user/logIn/logIn.css']
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], LogIn);
    return LogIn;
})();
exports.LogIn = LogIn;
