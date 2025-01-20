import { Page, expect } from "@playwright/test";

export class LoginPage {

    readonly page:  Page

    constructor(page: Page){
        this.page = page
    }
    
async getUserText () {
    console.log( await this.page.getByRole('link', { name: 'John Smith' }).innerText())
        
    // Assertion
    const expText = this.page.getByRole('link', { name: 'John Smith' })
    const checkText = await expText.innerText()
    expect(checkText).toEqual("John Smith")
  
    await this.page.getByRole("link", { name: " Sign out" }).click();
}

}
