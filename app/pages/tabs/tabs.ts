import { Component } from '@angular/core';
import { OrderPagePage } from '../order-page/order-page';
import { MapPagePage } from '../map-page/map-page';
import { HistoryPagePage } from '../history-page/history-page';
import {TrackPagePage} from '../track-page/track-page';
import {SettingsPage} from '../settings/settings';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;
  public tab5Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = MapPagePage;
    this.tab2Root = OrderPagePage;
    this.tab3Root = TrackPagePage;
    this.tab4Root = HistoryPagePage;
    this.tab5Root = SettingsPage;

  }
}
