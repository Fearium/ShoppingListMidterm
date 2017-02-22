/*  Created: February 22, 2017
    Mid Term Shopping List
    Jesse Baril
    200226521
    This is the app module page for the Shopping List */

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBurq8dEEPJLkxOVl5kSfe-YW6ypmy2JS8",
    authDomain: "shoppinglist-956de.firebaseapp.com",
    databaseURL: "https://shoppinglist-956de.firebaseio.com",
    storageBucket: "shoppinglist-956de.appspot.com",
    messagingSenderId: "799909944826"
  };
  

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
