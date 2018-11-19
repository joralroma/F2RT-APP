import { Injectable } from '@angular/core';

// Modilos Externos
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthServiceProvider {

// Variables
  public settings: {login: boolean} = {login: false}

  constructor(
    private _storage: Storage
  ) {}


  login(): void{
    this._storage.ready().then( ()=>{
      this.settings.login = true;
      this._storage.set('userId', this.settings)
    });
  }

  logout(): void{
    this._storage.ready().then( ()=>{
      this._storage.remove('userId').then((val) => {
        console.log('val: ',val);
      });
    });
  }

  authenticated(): Promise<any>{
    let promise = new Promise( (resolve, reject)=>{
      this._storage.ready().then( ()=>{
        this._storage.get('userId').then( settings =>{
          if(settings) this.settings = settings;
          resolve();
        });
      });
    });
    // return this._storage.get('userId').then((val) => {
    //   console.log('aqh: ',val);
    //   if(val){
    //     console.log('ah: ',val);
    //     return true;
    //   }else{
    //     return false
    //   }
    // });
    return promise;
  }

}
