import {Page, NavController} from 'ionic-angular';
import {HomePage} from '../../homePage/homePage';
import {Register} from '../register/register';


@Page({
  templateUrl: 'build/pages/user/logIn/logIn.html',
  styleUrls: ['build/pages/user/logIn/logIn.css']

})
export class LogIn {

  public nav:NavController;

  constructor(nav:NavController) {
    this.nav = nav;
  }

  goToHomePage() {
    this.nav.push(HomePage);
  }

  goToRegister() {
    this.nav.push(Register);
  }

  logIn() {



    // Parse.UserModel.logIn(this.username, this.password, {
    //   success: function (user) {
    //     alert("success");
    //   },
    //   error: function (user, error) {
    //     // The login failed. Check error to see why.
    //   }
    // });
  }


}
