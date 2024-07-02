const { test, expect } = require('@playwright/test');
const { homePage } = require('../../Pages/homePage');

test.describe("User search for content", () => {

    //TEST CASE 1 : 
    test('User search for a video', async ({ page }) => {
        //insert login page as const var
        const homepage = new homePage(page);
        //Direct to Youtube
        await homepage.goTo();
        //Search Video
        await homepage.fillSearchBar('Playwright testing');
        //Enter
        await homepage.clickSearchButton();
        //Choose video
        await homepage.clickContent('Getting Started with Playwright and VS Code');
        
        //Final Validation
        await expect(page).toHaveURL(/watch/);
        //Validate opening the correct video by getting the video title
        await expect(page.locator('#title').getByText('Getting Started with Playwright and VS Code').first()).toBeVisible();
        
        //Documentations (Photo/Video)
        await page.screenshot({path: './screenshot/user search for a video.png'});
        
    });

    //TEST CASE 2 : 
    test('User search for a youtube channel', async ({ page }) => {
        //insert login page as const var
        const homepage = new homePage(page);
        //Direct to Youtube
        await homepage.goTo();
        //Search content
        await homepage.fillSearchBar('Playwright');
        //Enter
        await homepage.clickSearchButton();
        //Click content
        await homepage.clickChannel('Playwright');
        
        //Final Validation
        await expect(page).toHaveURL(/@/);
        
        //Documentations (Photo/Video)
        await page.screenshot({path: './screenshot/user search for a youtube channel.png'});
    
    });
    
})