
import {test, expect} from "@playwright/test"
import { LoginPage }  from  "../pages/LoginPage" 
import  users    from "../testdata/users.json" assert { type: "json" };

test("Login scenario test", async ({ page }) => {
    const loginPage = new LoginPage(page)  // ✅ Use lowercase for instance

    await loginPage.gotoURL()
    await loginPage.fillEmail(users.username)
    await loginPage.fillpassword(users.password)
    await loginPage.submit()
    
     await page.waitForTimeout(4000)

     await expect (page).toHaveTitle("Learn Automation Courses")

     console.log("************  The test execution is done *************************")

    // Example assertion
    ///await expect(page.locator("h1")).toHaveText("Dashboard")
})