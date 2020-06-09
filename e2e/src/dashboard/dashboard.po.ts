import { browser, element, by, Key } from 'protractor';

export class DashboardPage {
  navigateTo(): Promise<unknown> {
    return browser.get('/dashboard') as Promise<unknown>;
  }

  getHeaderLabel(){
    return element(by.id('dashboard-header-label'));
  }

  getWelcomeMessage(){
    return element(by.id('dashboard-label'));
  }

  getLogoutButtonElement(){
    return element(by.id('logout'));
}

}