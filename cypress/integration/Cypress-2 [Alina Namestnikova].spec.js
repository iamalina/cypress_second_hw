/// <reference types="cypress" />

describe('Login tests', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('Successful Login', () => {
       cy.get('#username').type('tomsmith');
       cy.get('#password').type('SuperSecretPassword!');
       cy.get('.radius').click();
       cy.get('#flash').should('contain', 'You logged into a secure area!')
      });

      it('Failed login', () => {
        cy.get('#username').type('кобра');
        cy.get('#password').type('123');
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'Your username is invalid!')
     });

     it('Logout', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.radius').click();
      cy.get('#flash').should('contain', 'You logged into a secure area!');

      cy.get('[href="/logout"]').click(); 
      cy.get('#flash.success').should('contain', 'You logged out of the secure area!');
  });
});
