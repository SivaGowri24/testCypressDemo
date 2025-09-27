describe('Registration Form Validation', () => {
  const Url='https://practice.expandtesting.com/register';
  beforeEach(()=>{
    cy.visit(Url);
     });

  it.only('Registration Successful', () => {
    cy.get('input[name="username"]').type('SivaGowri1');
    cy.get('#password').type('SGowri1234!');
    cy.get('#confirmPassword').type('SGowri1234!');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    cy.get('.alert-info').should('be.visible').and('contain', 'Successfully registered, you can log in now.');
    })

   it('Password Mismatch', () => {
    cy.get('input[name="username"]').type('SivaGowri1');
    cy.get('#password').type('PasworrdMismatch!');
    cy.get('#confirmPassword').type('SGowri1234!');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    cy.get('div.alert.alert-danger.alert-dismissible.fade.show').should('be.visible').and('contain.text', 'Passwords do not match.');
})

it('Empty Field Error Verification', () => {
    cy.get('input[name="username"]').type('SivaGowri1');
    cy.get('#confirmPassword').type('SGowri1234!');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Register').click();
    cy.get('#flash').should('be.visible').and('contain.text', 'All fields are required.');
 
})
})