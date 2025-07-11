// callCenter.js

class CallCenterPage {
    constructor(page) {
      this.page = page;
    }
  
    async getHeroText() {
      return this.page.getByRole('heading', { name: 'Cut call center holding times' });
    }

    async navigateToIntegrations() {
      await this.page.getByRole('banner').getByRole('link').filter({ hasText: 'Integrations' }).click();
    }
}

module.exports = { CallCenterPage };