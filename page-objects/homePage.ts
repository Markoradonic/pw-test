import { Page, expect } from "@playwright/test";

export class HomePage {

    readonly page:  Page

    constructor(page: Page){
        this.page = page
    }
    
async testStorePage () {
    await this.page.getByRole('link', { name: 'Test Store' }).click();
}
/**
 * 
 * @param checkButton 

private async dropDownVisibleOrNot (checkButton: string){
    const visibleDropDownButton = this.page.getByTitle(checkButton)
    const notVisibleDropDownButton = await visibleDropDownButton.getAttribute("some-attribute")
    if (notVisibleDropDownButton == "something") {
        await visibleDropDownButton.click()
    }

    
}
 */

}

