import { Component, ErrorHandler } from '@angular/core';
import { Platform, IonicErrorHandler } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { Todos } from "../providers/todos";


@Component({
  templateUrl: 'app.html',
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Todos]
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
