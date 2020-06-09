import { browser, element, by, Key } from 'protractor';

export class LoginPage {
  navigateTo(): Promise<unknown> {
    return browser.get('/login') as Promise<unknown>;
  }

  setEmailInputElement(text){
    return element(by.id('username')).sendKeys(text);
  }

  getEmailInputElement(){
    return element(by.id('username')).getAttribute('value');
  }

  setPasswordInputElement(password){
    return element(by.id('password')).sendKeys(password);
  }

  getPasswordInputElement(){
    return element(by.id('password')).getAttribute('value');
  }

  getLoginButtonElement(){
    return element(by.id('loginButton'));
  }
  
}

