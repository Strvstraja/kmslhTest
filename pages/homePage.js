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
    async clickTheAccessibilityWidget() {
      await this.page.getByRole('button', { name: 'Toggle Accessibility Toolbar' }).click();
    }
    async getIncreaseTextToggle() {
      return this.page.getByText('Increase Text').locator('..').locator('input[type="checkbox"]');
    }
    async getContrastToggle() {
      return this.page.getByText('Contrast').locator('..').locator('input[type="checkbox"]');
    }
    async getDyslexiaFriendlyFontToggle() {
      return this.page.getByText('Readable Font').locator('..').locator('input[type="checkbox"]');
    }
    async getHighlightLinksToggle() {
      return this.page.getByText('Highlight Links').locator('..').locator('input[type="checkbox"]');
    }
    async toggleHighlightLinksToggle() {
      await this.page.getByText('link Highlight Links & Buttons').click();
    }
}

module.exports = { HomePage };