// homePage.js

class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('https://kmslh.com/');
    }
    async navigateToContactUs() {
      await this.page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
      await this.page.getByRole('banner').getByRole('link').filter({ hasText: 'Contact us' }).click();
    }
    async navigateToCallCenter() {
      await this.page.getByRole('navigation').getByRole('link', { name: 'Our Solutions' }).click();
      await this.page.getByRole('banner').getByRole('link').filter({ hasText: 'Call center' }).click();
    }
    async navigateToBookADemo() {
      await this.page.getByRole('banner').getByRole('link', { name: 'Book a Demo' }).click();
    }
}

module.exports = { HomePage };