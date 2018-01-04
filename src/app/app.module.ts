import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
/*import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
*/
import {AboutPage} from '../pages/vishal/about/about';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { AuthService } from '../providers/auth-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import {WelcomePage} from '../pages/vishal/welcome/welcome';
import {SettingPage} from '../pages/vishal/setting/setting';
import {ProfilePage} from '../pages/vishal/profile/profile';
import { SMS } from '@ionic-native/sms';
import{TabsPage} from '../pages/vishal/tabs/tabs';
import { SignupPage} from '../pages/vishal/signup/signup';
import { MyApp } from './app.component';
import { HomePage } from '../pages/vishal/home/home';
import {LoginPage} from '../pages/vishal/login/login';
import {ContactPage} from '../pages/vishal/contact/contact';
/*import {LoggedinPage} from '..//pages/loggedin/loggedin';
import {RegisterPage} from '../pages/register/register';
*/
 
/*const firebaseAuth ={
  apiKey: "AIzaSyCIXwpPzauwy17geTQBNtqS9T2iV372sd8",
  authDomain: "myproject1-255d3.firebaseapp.com",
  databaseURL: "https://myproject1-255d3.firebaseio.com",
  projectId: "myproject1-255d3",
  storageBucket: "myproject1-255d3.appspot.com",
  messagingSenderId: "710732355967"
};
*/


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    TabsPage,
    ProfilePage,
    SettingPage,
    WelcomePage,
    ContactPage,
    AboutPage
     /* LoggedinPage,
    RegisterPage
    */
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    /*  AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
     */
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    TabsPage,
    ProfilePage,
    SettingPage,
    WelcomePage,
    ContactPage,
    AboutPage
     /*LoggedinPage,
    RegisterPage
    */
  ],
  providers: [SMS,SocialSharing,AuthService,LocalNotifications,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
