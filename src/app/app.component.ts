import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestPage } from '../pages/test/test';
import { ActionSheetPage } from '../pages/action-sheets/action-sheets';
import { AlertPage } from '../pages/alerts/alerts';
import { BadgePage } from '../pages/badges/badges';
import { ButtonPage } from '../pages/buttons/buttons';
import { CardPage } from '../pages/cards/cards';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DatetimePage } from '../pages/datetime/datetime';
import { IconPage } from '../pages/icon/icon';
import { InputPage } from '../pages/input/input';
import { HyoPage } from '../pages/hyo/hyo';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Test', component: TestPage },
      { title: 'ActionSheet', component: ActionSheetPage },
      { title: 'Alert', component: AlertPage },
      { title: 'Badge', component: BadgePage },
      { title: 'Button', component: ButtonPage },
      { title: 'Card', component: CardPage },
      { title: 'Checkbox', component: CheckboxPage },
      { title: 'Datetime', component: DatetimePage },
      { title: 'Icon', component: IconPage },
      { title: 'Input', component: InputPage },
      { title: 'Hyo', component: HyoPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
