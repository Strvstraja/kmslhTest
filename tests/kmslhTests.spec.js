import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ContactUsPage } from '../pages/contactUsPage';
import * as userData from '../test-data/userData.json';
// Get test data from JSON file
const testUser = userData.user1;
test('Submit a contact form with missing mandatory fields', async ({ page }) => {
  // Instantiate the HomePage, ContactUsPage classes
  const homePage = new HomePage(page);
  const contactUsPage = new ContactUsPage(page);

  
  // Navigate to the home page
  await homePage.goto();
  
  // Navigate to the contact us page
  await homePage.navigateToContactUs();
  
  // Trigger the form fields rendering logic by interacting with the page
  await contactUsPage.triggerFormFieldsRendering();
  
  // Fill in the form fields using data from JSON file
  // Note: We're intentionally skipping firstName to test validation
  await contactUsPage.fillLastName(testUser.lastName);
  await contactUsPage.fillEmail(testUser.email);
  await contactUsPage.fillPhoneNumber(testUser.phoneNumber);
  await contactUsPage.fillJobTitle(testUser.jobTitle);
  await contactUsPage.fillCountry(testUser.country);
  await contactUsPage.fillMessage(testUser.message);
  
  // Submit form
  await contactUsPage.submitForm();
  
  // Verify that the name field is in focus (validation error)
  await expect(await contactUsPage.getNameField()).toBeFocused();

});
