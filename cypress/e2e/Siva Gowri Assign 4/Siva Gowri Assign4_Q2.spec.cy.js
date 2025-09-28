describe('Registration Form Validation', () => {
  const Url='https://practice.expandtesting.com/register';
  beforeEach(()=>{
    cy.visit(Url);
     });

  it.only('Registration Successful', () => {
    cy.get('input[name="username"]').type('SivaGowri@12345');
    cy.get('#password').type('SGowri@1234567!!');
    cy.get('#confirmPassword').type('SGowri@1234567!!');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    cy.get('.alert-info').should('be.visible').and('contain', 'Successfully registered, you can log in now.');
    })

   it('Password Mismatch', () => {
    cy.get('input[name="username"]').type('SivaGowri@12345');
    cy.get('#password').type('PasworrdMismatch@!!');
    cy.get('#confirmPassword').type('SGowri@1234567!!');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    // Wait up to 10 seconds for the success message
    cy.get('.alert-info', { timeout: 10000 }).should('be.visible').and('contain', 'Successfully registered, you can log in now.');
})

it('Empty Field Error Verification', () => {
    cy.get('input[name="username"]').type('SivaGowri@12345');
    cy.get('#confirmPassword').type('SGowri@1234567!!');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    cy.get('#flash').should('be.visible').and('contain.text', 'All fields are required.');
 
})
})