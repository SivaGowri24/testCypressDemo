describe('Assertions', () => {
 
  it.only('Assertions', () => {
    cy.visit('https://practice.expandtesting.com/login')
    cy.get('#username').type('practice');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('a','Home').click();
    cy.get('input[type="text"]').type('Assertion');
    cy.get('#search-button').click();
    cy.contains('a','Should Be').click();
   
    cy.get('#btn1').should('be.visible');
    cy.get('#btn2').should('not.be.visible');
    cy.get('#btn2').should('exist');
   
     cy.get('#ul1').should('be.visible');
    cy.get('#ul2').should('be.visible');
 
 
    cy.get('#cb1').should('be.checked');
    cy.get('#cb2').should('not.be.checked');
 
    cy.get('#div1').should('have.value', '');
   
     cy.get('#btn3').should('be.enabled');
    cy.get('#btn4').should('be.disabled');
   
    cy.get('label[for="a_number"]').should('have.text', 'number');
    cy.get('#a_number').should('exist');
   
   
  })
})