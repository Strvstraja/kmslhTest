import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ContactUsPage } from '../pages/About/contactUsPage';
import { CallCenterPage } from '../pages/OurSolutions/callCenterPage';
import { IntegrationsPage } from '../pages/integrationsPage';
import { CaseStudiesPage } from '../pages/caseStudiesPage';
import { AboutUsPage } from '../pages/About/aboutUsPage';
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

test('Validate that navigation between major site sections works as expected', async ({ page }) => {
  // Instantiate the HomePage, CallCenterPage, IntegrationsPage, CaseStudiesPage, AboutUsPage, ContactUsPage classes
  const homePage = new HomePage(page);
  const callCenterPage = new CallCenterPage(page);
  const integrationsPage = new IntegrationsPage(page);
  const caseStudiesPage = new CaseStudiesPage(page);
  const aboutUsPage = new AboutUsPage(page);
  const contactUsPage = new ContactUsPage(page);
  // Navigate to the home page
  await homePage.goto();
  // Navigate to the Call center page via the link from the navigation menu
  await homePage.navigateToCallCenter(); 
  // Verify that the user is redirected to the Call center page
  await expect(await callCenterPage.getHeroText()).toBeVisible();
  // Navigate to the Integrations page via the link from the navigation menu
  await callCenterPage.navigateToIntegrations();
  // Verify that the user is redirected to the Integrations page
  await expect(await integrationsPage.getHeroText()).toBeVisible();
  //Navigate to the Case Studies page via the link from the navigation menu
  await integrationsPage.navigateToCaseStudies();
  //Verify that the user is redirected to the Case Studies page
  await expect(await caseStudiesPage.getHeroText()).toBeVisible();
  // Navigate to the About Us page via the link from the navigation menu
  await caseStudiesPage.navigateToAboutUs();
  await expect(await aboutUsPage.getHeroText()).toBeVisible();
  // Navigate to the Contact Us page via the link from the navigation menu
  await aboutUsPage.navigateToContactUs();
  //Verify that the user is redirected to the Contact Us page
  await expect(await contactUsPage.getHeroText()).toBeVisible();

});
