import {test, expect} from "@playwright/test"
export class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.emailInput     = page.locator("#email1")
        this.passwordInput  = page.getByPlaceholder('Enter Password')
        this.loginBtn       = page.locator("//button[text()='Sign in']")
    }
    async gotoURL ()

    {
        await this.page.goto("https://freelance-learn-automation.vercel.app/login")
    }
    async fillEmail(email)

    {
         await this.emailInput.fill(email)
    }
    async fillpassword(password)
    {
         await this.passwordInput.fill(password)
    }
    async submit ()
    {
        await this.loginBtn.click()
    }

}

//module.exports=LoginPage;