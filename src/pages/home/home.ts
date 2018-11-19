import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

// Pages
import { LoginPage } from './../login/login';

// Provider
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listMachines: any[] = [0,1,2,3,4,5,6,7,8,9,10,11];

  constructor(
    public _navCtrl: NavController,
    private _authService: AuthServiceProvider,
    private _menuControl: MenuController
  ) {}

  logout(){
    this._authService.logout();
    this._navCtrl.setRoot(LoginPage);
  }

  openMenu(): void{
    this._menuControl.toggle();
  }


}
