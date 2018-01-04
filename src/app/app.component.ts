import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/vishal/login/login';

import { WelcomePage } from '../pages/vishal/welcome/welcome';
import { TabsPage } from '../pages/vishal/tabs/tabs';
import { ProfilePage } from '../pages/vishal/profile/profile';
import { SettingPage } from '../pages/vishal/setting/setting';

//import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;
  @ViewChild(Nav) nav:Nav;
  constructor(platform: Platform,
     statusBar: StatusBar, 
     splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  go_to_home(Page){
    this.nav.setRoot(TabsPage);
  }
  go_to_profile(Page){
    this.nav.push(ProfilePage);
    
  }
  go_to_setting(Page){
    this.nav.push(SettingPage);
  }

  go_to_logout(Page){
    this.nav.setRoot(WelcomePage);
  }
}

