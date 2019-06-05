
import {Page} from './Page';

class LoginPageClass extends Page {
  constructor(){
    super();
  }

get username(){ return browser.element('#Username')};
get password(){ return browser.element('#password')};
get submitbutton(){ return browser.element('button')};
}

export const LoginPage = new LoginPageClass();
