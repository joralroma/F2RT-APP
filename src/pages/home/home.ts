import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Pages
import { LoginPage } from './../login/login';

// Provider
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public _navCtrl: NavController,
    private _authService: AuthServiceProvider
    ) {}

  logout(){
    this._authService.logout();
    this._navCtrl.setRoot(LoginPage);
  }

}
