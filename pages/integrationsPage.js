// integrations.js

class IntegrationsPage {
    constructor(page) {
      this.page = page;
    }
  
    async getHeroText() {
      return this.page.getByRole('heading', { name: 'Natively Integrates With Your' });
    }

    async navigateToCaseStudies() {
      await this.page.getByRole('banner').getByRole('link').filter({ hasText: 'Case Studies' }).click();
    }
}

module.exports = { IntegrationsPage };