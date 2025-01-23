import { test, expect } from "@playwright/test"
import {HomePage} from "../page-objects/homePage"
import { TestStorePage } from "../page-objects/testStorePage";
import { LoginPage } from "../page-objects/loginPage";

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("correctUsernameAndPassword", async ({ page }) => {
  const homePage = new HomePage(page)
  const testStorePage = new TestStorePage(page)
  const loginPage = new LoginPage(page)


  await homePage.testStorePage()
  await testStorePage.correctUserAndPass()
  await loginPage.getUserText()

});

test("incorrectUsernameAndPassword", async ({ page }) => {
  await page.getByRole("link", { name: "Test Store" }).click();
  await page.getByRole("link", { name: " Sign in" }).click();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("invalid@test.com");
  await page.getByLabel("Password input").click();
  await page.getByLabel("Password input").fill("invalid123");
  await page.getByRole("button", { name: "Sign in" }).click();
});
 