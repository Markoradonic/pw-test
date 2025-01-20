import {test} from "@playwright/test" 


test.beforeEach(async({page}) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://automationtesting.co.uk')
})

test.afterEach(async({page}) =>{
    // await page.close();
  })

test('plusFunctionality', async ({ page }) => {
    await page.getByRole('link', { name: 'Calculator (JS)' }).click();
    await page.getByRole('button', { name: '3' }).click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByRole('button', { name: '6' }).click();
    await page.getByRole('button', { name: '=' }).click();
    const resultValue = await page.locator('#result').inputValue();

    // Asertacija za vrednost
    console.log(`Vrednost u polju je: ${resultValue}`);

    if (resultValue === '9') {
        console.log('Asertacija uspešna: Broj je 9');
    } else {
        console.log('Asertacija neuspešna');
    }
    
  });