import {Page, NavController} from 'ionic-angular';
import {HomePage} from '../../homePage/homePage';
import {LogIn} from '../logIn/logIn';
import {User} from '../../../servises/backand/User';


@Page({
    templateUrl: 'build/pages/user/register/register.html',
    styleUrls: ['build/pages/user/register/register.css'],
    providers: [User],


})
export class Register {
    username;
    firstPassword;
    secondPassword;
    email;

    errorUserMessage = "dasdasda";
    errorPasswordMessage = "asdasd";
    errorEmailMessage = "dasdasd";

    public nav:NavController;

    constructor(nav:NavController, private user:User) {
        this.nav = nav;
    }


    //    Navigation


    goToHomePage() {
        this.nav.push(HomePage);
    }

    goToLogIn() {
        this.nav.push(LogIn);
    }

    //    UserModel register
    register() {


        console.log(this.user.createUser(
            {
                firstName: "a",
                lastName: "b",
                email: "asd@as.com",
                password: "12345678",
                confirmPassword: "12345678",
                image: "null"
            }
        ));


        if (this.validateInput()) {

            console.log("OK");


            // var user = new Parse.UserModel();
            // user.set("username", this.username);
            // user.set("password", this.firstPassword);
            // user.set("email", this.email);

            // other fields can be set just like with Parse.Object
            // user.set("phone", "415-392-0202");

            //     user.signUp(null, {
            //       success: function (user) {
            //         // Hooray! Let them use the app now.
            //       },
            //       error: function (user, error) {
            //         // Show the error message somewhere and let the user try again.
            //         alert("Error: " + error.code + " " + error.message);
            //       }
            //     });
        }
        else {
            this.userNameChange();
            this.passwordChange(this.firstPassword);
            this.passwordChange(this.secondPassword);
            this.emailChange(this.email);
        }
    }

    validateInput() {
        return (this.validateUser() && this.validatePassword() && this.validateEmail());
    }

    validateUser() {
        return !(this.username == "" || this.username == " " || this.username == undefined || this.username == null);
    }

    validatePassword() {
        var passw = /^[A-Za-z]\w{8,19}$/; //orice cuvant care contine incuziv _, care contine 8-20 litere
        return ((this.firstPassword !== undefined ) && passw.test(this.firstPassword) && (this.firstPassword === this.secondPassword));
    }

    validateEmail() {
        var em = /\S+@\S+\.\S+/;
        return ((this.email !== undefined ) && this.email.match(em));
    }

    userNameChange() {
        console.log("keyup");
        if ((this.username == "" || this.username == " " || this.username == undefined || this.username == null)) {
            this.errorUserMessage = "The username field can not be empty";
        }
        else {
            this.errorUserMessage = "";
        }
    }

    passwordChange(passwordValue) {
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
    }

    emailChange(emailValue) {
        var em = /\S+@\S+\.\S+/;
        if ((emailValue == "" || emailValue == " " || emailValue == undefined || emailValue == null)) {
            this.errorEmailMessage = "The email field can not be empty"
            console.log(" email");

        }
        else if (!emailValue.match(em)) {
            this.errorEmailMessage = "Enter a valit email address"
        }
        else {
            this.errorEmailMessage = "";
        }
    }
}



