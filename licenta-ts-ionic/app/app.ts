import {App, Platform} from 'ionic-angular';
import {enableProdMode} from 'angular2/core';

import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/homePage/homePage';


// import {TabsPage} from './pages/tabs/tabs';


@App({
    templateUrl: 'build/app.html',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})



export class MyApp {

    private rootPage:any;

    constructor(platform:Platform) {

        this.rootPage = HomePage;

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

