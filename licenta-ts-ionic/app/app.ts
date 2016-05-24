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
        //
        // if ('serviceWorker' in navigator) {
        //     navigator.serviceWorker.register('/build/scripts/pushNotification.js').then(function(registration) {
        //         // Registration was successful
        //         console.log('ServiceWorker registration successful with scope: ',    registration.scope);
        //     }).catch(function(err) {
        //         // registration failed :(
        //         console.log('ServiceWorker registration failed: ', err);
        //     });
        // }



        if ('serviceWorker' in navigator) {
            console.log('Service Worker is supported');
            navigator.serviceWorker.register('/build/scripts/pushNotification.js').then(function(reg) {
                console.log('reg)', reg);
                reg.pushManager.subscribe({
                    userVisibleOnly: true
                }).then(function(sub) {
                    console.log('endpoint:', sub.endpoint);
                });
            }).catch(function(error) {
                console.log(':^(', error);
            });
        }


        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

