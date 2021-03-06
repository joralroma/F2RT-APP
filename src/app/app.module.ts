import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Modules Propios
import { ComponentsModule } from './../components/components.module';

// Modulos Externos
import { IonicStorageModule } from '@ionic/storage';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

// Providers
import { AuthServiceProvider } from './../providers/auth-service/auth-service';


let pages = [
  LoginPage,
  HomePage
];

let provider = [
  AuthServiceProvider
];

@NgModule({
  declarations: [
    MyApp,
    pages
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    provider
  ]
})
export class AppModule {}
