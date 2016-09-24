import { Component } from '@angular/core';
import { OrderPagePage } from '../order-page/order-page';
import { MapPagePage } from '../map-page/map-page';
import { HistoryPagePage } from '../history-page/history-page';
import {TrackPagePage} from '../track-page/track-page';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = OrderPagePage;
    this.tab2Root = MapPagePage;
    this.tab3Root = TrackPagePage;
    this.tab4Root = HistoryPagePage;

  }
}
