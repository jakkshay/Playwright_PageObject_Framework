import { expect, type Locator, type Page } from '@playwright/test';

export class FacebookLogin{
    readonly page: Page;
    readonly facebook_h2 = 'h2';
    readonly user_email_input = '#email';
    readonly user_password_input = '#pass';
    readonly login_button_data_testid = 'royal_login_button';
    readonly URL = 'https://www.facebook.com/';

    constructor(page: Page) {
        this.page = page;
    }

    async VisitFacebookPage(){
        await this.page.goto(this.URL);
    }
    
    async pageShouldHaveTitle(title: string){
        await expect(this.page).toHaveTitle(title)

    }

    async LoginInvalidCredentials(username: string, password: string){
        await this.page.locator(this.user_email_input).fill(username);
        await this.page.locator(this.user_password_input).fill(password);
        await this.page.getByTestId(this.login_button_data_testid).click();
    }
}