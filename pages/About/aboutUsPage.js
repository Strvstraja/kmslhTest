// aboutUsPage.js

class AboutUsPage {
    constructor(page) {
      this.page = page;
    }

    async getHeroText() {
        return this.page.getByRole('heading', { name: 'We\'re on a mission to provide' });      
    }

    async navigateToContactUs() { 
        await this.page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
        await this.page.getByRole('banner').getByRole('link').filter({ hasText: 'Contact us' }).click();
    }
}
module.exports = { AboutUsPage };