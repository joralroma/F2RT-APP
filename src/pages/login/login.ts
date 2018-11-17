import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Provider
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

// Pages
import { HomePage } from './../home/home';

// Modilos Externos
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public _navCtrl: NavController,
    public _navParams: NavParams,
    private _alertCtrl: AlertController,
    private _authService: AuthServiceProvider
  ) {}

  ionViewDidLoad() {
    this._authService.authenticated().then( (result) => {
      console.log('rl: ',result);
      if(result) this._navCtrl.setRoot(HomePage);
    });
  }

  login(): void{
    this._authService.login();
    this._navCtrl.setRoot(HomePage);
  }

  showPolicies(): void{
    let alert = this._alertCtrl.create({
      title: 'OK!',
      subTitle: 'El Login fue correcto',
      buttons: ['Ok']
    });
    alert.present();
  }

}
