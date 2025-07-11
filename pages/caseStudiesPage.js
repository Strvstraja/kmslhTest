// caseStudiesPage.js

class CaseStudiesPage {
    constructor(page) {
      this.page = page;
    }
  
    async getHeroText() {
      return this.page.getByRole('heading', { name: 'Our Clients Shares Their' });
    }

    async navigateToAboutUs() {
      await this.page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
      await this.page.getByRole('banner').getByRole('link').filter({ hasText: 'About Us' }).click();
    }
}

module.exports = { CaseStudiesPage };