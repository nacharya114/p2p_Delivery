import { Component } from '@angular/core';
<<<<<<< HEAD
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ListPage } from '../list/list';
=======
import { OrderPagePage } from '../order-page/order-page';
import { MapPagePage } from '../map-page/map-page';
import { HistoryPagePage } from '../history-page/history-page';
import {TrackPagePage} from '../track-page/track-page';
>>>>>>> ba961e0c9def02010778cc7286cb5b21cd77f56d

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
<<<<<<< HEAD
  public tab4root: any;
=======
  public tab4Root; any;
>>>>>>> ba961e0c9def02010778cc7286cb5b21cd77f56d

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
<<<<<<< HEAD
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
    this.tab4root = ListPage;
=======
    this.tab1Root = OrderPagePage;
    this.tab2Root = MapPagePage;
    this.tab3Root = HistoryPagePage;
    this.tab4Root = TrackPagePage;
>>>>>>> ba961e0c9def02010778cc7286cb5b21cd77f56d
  }
}
