import { Page, expect } from "@playwright/test"
import { LoginPage } from "./loginPage";

export class TestStorePage {

    readonly page:  Page


    constructor(page: Page) {
        this.page = page
    }

 async correctUserAndPass () {



    await this.page.getByRole("link", { name: " Sign in" }).click();
    await this.page.getByLabel("Email").click();
    await this.page.getByLabel("Email").fill("test@test.com");
    await this.page.getByLabel("Password input").click();
    await this.page.getByLabel("Password input").fill("test123");
    await this.page.getByRole("button", { name: "Sign in" }).click();


 }



}