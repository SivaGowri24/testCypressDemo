import LoginPage from '../pages/LoginPage';
import SecurePage from '../pages/SecurePage';
import CheckboxPage from '../pages/CheckboxPage';
import DropdownPage from '../pages/DropdownPage';
import ContextMenuPage from '../pages/ContextMenuPage';
import DynamicPage from '../pages/DynamicPage';

//Assignment 1: Login Page
describe('Login sinug Page Object', () => {
  beforeEach(function () {
    cy.fixture('users').as('users'); 
    LoginPage.visit();
  });

  it.skip('Log in with valid credentials', function () {
    const { validUser } = this.users;
    LoginPage.enterUsername(validUser.username);
    LoginPage.enterPassword(validUser.password);
    LoginPage.clickLogin();
    cy.get('#flash').should('be.visible').and('include.text', 'You logged into a secure area!');
  });

  it.skip('Error when used invalid credentials', function () {
    const { invalidUser } = this.users;
    LoginPage.enterUsername(invalidUser.username);
    LoginPage.enterPassword(invalidUser.password);
    LoginPage.clickLogin();
    cy.get('#flash').should('be.visible').and('contain.text', 'Your username is invalid!');
  });

//Assignment 2: Secure Page

  it('Test secure area access and logout flow', function () {
    SecurePage.loginAndLogout(this.users.validUser.username, this.users.validUser.password);
  });
});

//Assignment 3: Checkboxes Interaction

describe('Checkboxes Interaction with Pre/Post Validation', () => {
  beforeEach(() => {
    cy.visit('/checkboxes');
  });

  it.skip('Validate state changes after interaction', () => {
    CheckboxPage.validateCheckboxState('#checkbox1', 'unchecked');
    CheckboxPage.validateCheckboxState('#checkbox2', 'checked');

    CheckboxPage.checkFirstBox();
    CheckboxPage.uncheckSecondBox();

    CheckboxPage.validateCheckboxState('#checkbox1', 'checked');
    CheckboxPage.validateCheckboxState('#checkbox2', 'unchecked');
  });
});

//Assignment 4: Dropdown Handling

describe('Dropdown Handling', () => {
  beforeEach(() => {
    cy.visit('/dropdown');
  });

  it('Validates by selecting Option 1', () => {
    DropdownPage.selectOption('1');
    DropdownPage.getSelectedOption().should('contain.text', 'Option 1');
  });

  it('Validates by selecting Option 2', () => {
    DropdownPage.selectOption('2');
    DropdownPage.getSelectedOption().should('contain.text', 'Option 2');
  });
});


//Assignment 5: Context Menu

describe('Context Menu', () => {
  beforeEach(() => {
    cy.visit('/context-menu');
  });

  it('Validates the text of alert message', () => {
    ContextMenuPage.handleAlert('You selected a context menu');
    ContextMenuPage.rightClickBox();
  });
});

//Assignment 9: Dynamic Content

describe('Validate Dynamic Content', () => {
  beforeEach(() => {
    cy.visit('/dynamic-content');
  });

  it('Refresh and Assert content', () => {
    DynamicPage.getTextBlocks().then(initialContent => {
      cy.reload();
      DynamicPage.getTextBlocks().then(refreshedContent => {
        DynamicPage.compareContent(initialContent, refreshedContent);
      });
    });
  });
})
