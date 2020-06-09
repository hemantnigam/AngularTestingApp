import { DashboardPage } from './Dashboard.po';
import { browser } from 'protractor';

describe('Dashboard view', function() {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });

  it('should show dashboard label on header',()=>{
    page.navigateTo();
    expect(page.getHeaderLabel().getText()).toEqual('Dashboard');
  })

  it('should display welcome message',()=>{
    page.navigateTo();
    expect(page.getWelcomeMessage().getText()).toEqual('Welcome to dashboard');
  })

  it('should logout and navigate to login',()=>{
    page.navigateTo();
    page.getLogoutButtonElement().click().then(function() {
      browser.waitForAngular();
      expect(browser.driver.getCurrentUrl()).toMatch('/login');
    });
  })
  
});