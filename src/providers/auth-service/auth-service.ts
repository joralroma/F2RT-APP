import { Injectable } from '@angular/core';

// Modilos Externos
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthServiceProvider {

// Variables

  constructor(
    private _storage: Storage
  ) {}


  login(): void{
    this._storage.set('userId', 1);
  }

  logout(): Promise<void>{
    return this._storage.remove('userId').then((val) => {
      console.log('val: ',val);
    });
  }

  authenticated(): Promise<boolean>{
    return this._storage.get('userId').then((val) => {
      console.log('aqh: ',val);
      if(val){
        console.log('ah: ',val);
        return true;
      }else{
        return false
      }
    });
  }

}
