describe('Checkbox Interaction', () => {
 
  it('Checkbox Interaction', () => {
     cy.visit('https://practice.expandtesting.com/login')
    cy.get('#username').type('practice');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.contains('button', 'Login').click();
    cy.contains('a','Home').click();
    cy.get('input[type="text"]').type('checkbox');
    cy.get('#search-button').click();
    cy.contains('a','Check Boxes').click();
    cy.get('#checkbox1').click();
    cy.get('#checkbox1').should('be.checked');
    cy.get('#checkbox1').click();
    cy.get('#checkbox1').should('not.be.checked');
    cy.get('#checkbox2').click();
    cy.get('#checkbox2').should('not.be.checked');
 
  })
})