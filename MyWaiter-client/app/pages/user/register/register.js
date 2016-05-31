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
var logIn_1 = require('../logIn/logIn');
var User_1 = require('../../../servises/backand/User');
var Register = (function () {
    function Register(nav, user) {
        this.user = user;
        this.errorUserMessage = "dasdasda";
        this.errorPasswordMessage = "asdasd";
        this.errorEmailMessage = "dasdasd";
        this.nav = nav;
    }
    //    Navigation
    Register.prototype.goToHomePage = function () {
        this.nav.push(homePage_1.HomePage);
    };
    Register.prototype.goToLogIn = function () {
        this.nav.push(logIn_1.LogIn);
    };
    //    UserModel register
    Register.prototype.register = function () {
        console.log(this.user.createUser({
            firstName: "a",
            lastName: "b",
            email: "asd@as.com",
            password: "12345678",
            confirmPassword: "12345678",
            image: "null"
        }));
        if (this.validateInput()) {
            console.log("OK");
        }
        else {
            this.userNameChange();
            this.passwordChange(this.firstPassword);
            this.passwordChange(this.secondPassword);
            this.emailChange(this.email);
        }
    };
    Register.prototype.validateInput = function () {
        return (this.validateUser() && this.validatePassword() && this.validateEmail());
    };
    Register.prototype.validateUser = function () {
        return !(this.username == "" || this.username == " " || this.username == undefined || this.username == null);
    };
    Register.prototype.validatePassword = function () {
        var passw = /^[A-Za-z]\w{8,19}$/; //orice cuvant care contine incuziv _, care contine 8-20 litere
        return ((this.firstPassword !== undefined) && passw.test(this.firstPassword) && (this.firstPassword === this.secondPassword));
    };
    Register.prototype.validateEmail = function () {
        var em = /\S+@\S+\.\S+/;
        return ((this.email !== undefined) && this.email.match(em));
    };
    Register.prototype.userNameChange = function () {
        console.log("keyup");
        if ((this.username == "" || this.username == " " || this.username == undefined || this.username == null)) {
            this.errorUserMessage = "The username field can not be empty";
        }
        else {
            this.errorUserMessage = "";
        }
    };
    Register.prototype.passwordChange = function (passwordValue) {
        var passw = /^[A-Za-z]\w{8,19}$/; //orice cuvant care contine incuziv _, care contine 8-20 litere
        console.log(this.firstPassword + " " + this.secondPassword);
        if ((passwordValue == "" || passwordValue == " " || passwordValue == undefined || passwordValue == null)) {
            this.errorPasswordMessage = "The password field can not be empty";
        }
        else if (!passw.test(passwordValue)) {
            this.errorPasswordMessage = "The must have at least 8 caracters";
        }
        else if (this.firstPassword != this.secondPassword) {
            this.errorPasswordMessage = "The paswords are different";
        }
        else {
            this.errorPasswordMessage = "";
        }
    };
    Register.prototype.emailChange = function (emailValue) {
        var em = /\S+@\S+\.\S+/;
        if ((emailValue == "" || emailValue == " " || emailValue == undefined || emailValue == null)) {
            this.errorEmailMessage = "The email field can not be empty";
            console.log(" email");
        }
        else if (!emailValue.match(em)) {
            this.errorEmailMessage = "Enter a valit email address";
        }
        else {
            this.errorEmailMessage = "";
        }
    };
    Register = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/user/register/register.html',
            styleUrls: ['build/pages/user/register/register.css'],
            providers: [User_1.User],
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, User_1.User])
    ], Register);
    return Register;
})();
exports.Register = Register;
