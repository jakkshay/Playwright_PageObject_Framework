import { test, expect } from '@playwright/test';
import { FacebookLogin } from '../page-object-model/facebook_loginpage';

const PageTitle = 'Facebook – log in or sign up';
const userEmail = 'myemail@testmail.com';
const userPassword = 'Test@1234#'

test('Facebook login with Invalid Credentials', async ({ page }) => {
  const loginObj =  new FacebookLogin(page);
  await loginObj.VisitFacebookPage();
  await loginObj.pageShouldHaveTitle(PageTitle);
  await loginObj.LoginInvalidCredentials(userEmail, userPassword);
});


