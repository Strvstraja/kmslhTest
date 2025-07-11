// contactUsPage.js

class ContactUsPage {
    constructor(page) {
      this.page = page;
    }

async triggerFormFieldsRendering() {
      //triger the form fields rendering logic by  interacting with the page
      await this.page.keyboard.press('Shift');
}
async fillName(name) {
    await this.page.getByRole('textbox', { name: 'First name*' }).fill(name);
}
async getNameField() {
    return this.page.getByRole('textbox', { name: 'First name*' });
}
async fillLastName(lastName) {
    await this.page.getByRole('textbox', { name: 'Last name*' }).fill(lastName);
}
async fillEmail(email) {
    await this.page.getByRole('textbox', { name: 'Professional Email*' }).fill(email);
}
async fillPhoneNumber(phoneNumber) {
    await this.page.getByRole('textbox', { name: 'Phone number*' }).fill(phoneNumber);
}
async fillJobTitle(jobTitle) {
    await this.page.getByRole('textbox', { name: 'Job Title*' }).fill(jobTitle);
}
async fillCountry(country) {
    await this.page.getByLabel('Country/Region*').selectOption(country);
}
async fillMessage(message) {
    await this.page.getByRole('textbox', { name: 'Message' }).fill(message);
}
async submitForm() {
    await this.page.getByRole('button', { name: 'Contact us' }).click();
}
async getHeroText() {
    return this.page.getByRole('heading', { name: 'Take your company knowledge' });    
}
}
module.exports = { ContactUsPage };