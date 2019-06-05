//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start  
//import {expect} from 'chai';

import { LoginPage } from '../PAGES/login.page'

describe ('login', ()=> {
    it('should login in Mluvii', () => {
       
        browser.url('https://apptest.mluvii.com/app')
        LoginPage.username.setValue('testoperator1@eupp.cz');
        LoginPage.password.setValue('test123');
                

    });
})

