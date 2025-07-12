// bookADemoPage.js

class BookADemoPage {
    constructor(page) {
      this.page = page;
    }
  
    async getHeroText() {
        return this.page.getByRole('heading', { name: 'Take your company knowledge' });
    }

    async navigateToIntegrations() {
      await this.page.getByRole('banner').getByRole('link').filter({ hasText: 'Integrations' }).click();
    }

    async getNameField() {
        return this.page.getByRole('textbox', { name: 'First name*' });
    }

    async getLastNameField() {
        return this.page.getByRole('textbox', { name: 'Last name*' });
    }

    async getProfessionalEmailField() {
        return this.page.getByRole('textbox', { name: 'Professional Email*' });
    }

    async getPhoneNumberField() {
        return this.page.getByRole('textbox', { name: 'Phone number*' });
    }

    async getJobTitleField() {
        return this.page.getByRole('textbox', { name: 'Job Title*' });
    }
    
    async getCountryField() {
        return this.page.getByLabel('Country/Region*');
    }

    async getMessageField() {
        return this.page.getByRole('textbox', { name: 'Message' });
    }
}

module.exports = { BookADemoPage };