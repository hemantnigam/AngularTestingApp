import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('Login view', function() {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });
  it('should show testAdmin in username input field',()=>{
    page.navigateTo();
    page.setEmailInputElement('testAdmin');
    expect(page.getEmailInputElement()).toEqual('testAdmin');
  })


  it('should show testPassword in password input field',()=>{
    page.navigateTo();
    page.setPasswordInputElement('testPassword');
    expect(page.getPasswordInputElement()).toEqual('testPassword');
  })

  it('should show login button on login page',()=>{
      page.navigateTo();
      expect(page.getLoginButtonElement()).toBeTruthy();
  })

  it('should navigate to dashboard page',()=>{
    page.navigateTo();
    page.setEmailInputElement('admin');
    page.setPasswordInputElement('admin1234');
    page.getLoginButtonElement().click().then(function() {
      browser.waitForAngular();
      expect(browser.driver.getCurrentUrl()).toMatch('/dashboard');
    });
  })
});






  



