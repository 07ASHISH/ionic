import { SpecialPage } from './../special/special';
import { PageInterface } from './menu';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, } from 'ionic-angular';


export interface PageInterface {
  title?:string,
  pageName?: string,
  tabCompenet?: any,
  index?: number,
  icon?: string
}
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = 'TabsPage';
  @ViewChild(Nav) nav : Nav;

  pages : PageInterface[] = [
    {title: 'Tab 1', pageName: 'TabsPage', tabCompenet: 'Tab1Page', index:0, icon: 'home' },
    {title: 'Tab 2', pageName: 'TabsPage', tabCompenet: 'Tab2Page', index:1, icon: 'contacts' },
    {title: 'Tab 3', pageName: 'SpecialPage', icon: 'home' }


  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPages(page: PageInterface){
    let parms = {};
    if(page.index){
      parms = { tabIndex : page.index}
    }
    if(this.nav.getActiveChildNav() && page.index != undefined ){
      this.nav.getActiveChildNav().select(page.index)
    }
    else 
    {
      this.nav.setRoot(page.pageName, parms)
    }
  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();
    if(childNav){
      if(childNav.getSelected() && childNav.getSelected().root == page.tabCompenet ){
        return 'primary'
      }
      return;
    }
    if(this.nav.getActive() && this.nav.getActive().name === page.pageName)
    return 'primary'
  }
}
