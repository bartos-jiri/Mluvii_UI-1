//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start
//import {expect} from 'chai';

import { LoginPage } from '../pages/login.page';

describe('login', () => {
	it('should login in Mluvii', () => {
		browser.url('/app');
		LoginPage.username.setValue('testoperator1@eupp.cz');
		LoginPage.password.setValue('test123');
	});
});
