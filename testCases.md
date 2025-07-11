# Test Cases

## Provided Test Cases

### Test Case 1: Validate "Book a Demo" Link Navigation
- From the homepage, click on the "Book a Demo" button (available in the header or hero section)
- Verify the redirection to the Demo Request form page
- Validate that all input fields are present and interactable

### Test Case 2: Validate Default State of Accessibility Toggles
- Open the Accessibility widget (wheelchair icon)
- Check the default state (enabled/disabled) of each toggle:
  - Bigger Text
  - Contrast Toggle
  - Dyslexia-friendly Font
  - Highlight Links
- Choose one toggle from the following list:
  - Bigger Text
  - Contrast Toggle
  - Dyslexia-friendly Font
  - Highlight Links
- Verify the toggle's expected behavior:
  - Toggle it on and validate the change in UI
  - Toggle it off and validate that the UI returns to its original state

## My Test Cases

### Test Case 3: Submit a contact form with missing mandatory fields
#### Description:
Submit a contact form with missing mandatory fields to make sure the validation is working as expected
#### Test steps:
1. Navigate to the home page https://kmslh.com/
2. Navigate to the contact us page via the link from the about dropdown menu
3. Fill in following mandatory data (Lastname, Professional Email, Phone, Country)
4. Leave the Name field empty
5. Fill in the message field
6. Submit the form

#### Expected Result:
The form should not be submitted and the name field should be in focus.


### Test Case 4: Validate that navigation between major site sections works as expected
#### Description:
Validate that navigation between major site sections Solutions, Integrations, Case Studies, About Us, Contact Us, works as expected.
#### Test steps:
1. Navigate to the home page https://kmslh.com/
2. Navigate to the Call center via the link from the Our Solutions dropdown navigation menu  
  Expected Result:  
  The user should be redirected to the Call center page.  

3. Navigate to the Integrations page via the link from the navigation menu  
  Expected Result:  
  The user should be redirected to the Integrations page.  

4. Navigate to the Case Studies page via the link from the navigation menu  
  Expected Result:  
  The user should be redirected to the Case Studies page.  

5. Navigate to the About Us page via the link from the About dropdown navigation menu  
  Expected Result:  
  The user should be redirected to the About Us page.  

6. Navigate to the Contact Us page via the link from the About dropdown navigation menu  
  Expected Result:  
  The user should be redirected to the Contact Us page.




