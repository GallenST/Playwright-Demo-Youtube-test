

const { expect } = require('@playwright/test')


//Class 
exports.homePage = class homePage {
    /**
     * 
     * @param {import ('@playwright/test').page } page 
     */

    constructor(page){
        //Init
        this.page = page;

        //Elements
        this.searchBar = page.getByPlaceholder('Search');
        this.content = page.locator('#video-title');
        this.channel = page.locator('#text');
        this.searchbtn = page.locator('#search-icon-legacy');
    }

    async goTo(){
        await this.page.goto('https://www.youtube.com/');
    }

    async fillSearchBar(param1){
        await this.searchBar.click();
        await this.searchBar.fill(param1);
    }

    async clickSearchButton(){
        await this.searchbtn.click();
    }

    async clickContent(param1){
        await this.content.getByLabel(param1).click();
    }

    async clickChannel(param1){
        await this.channel.getByText(param1).click();
    }

}