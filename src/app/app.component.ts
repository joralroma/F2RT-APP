import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from './../pages/home/home';


// Provider
import { AuthServiceProvider } from './../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _authService: AuthServiceProvider
    ) {
    platform.ready().then(() => {
      this._authService.authenticated().then( () => {
        if(this._authService.settings.login){
          this.rootPage = HomePage;
        }else{
          this.rootPage = LoginPage;
        }
        statusBar.styleDefault();
        splashScreen.hide();
      });
    });
  }
}

