///<reference types="Cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('.dropdown-menu', 'Traversal').should('not.be.visible');
    cy.contains('Commands').click();
    cy.contains('.dropdown-menu', 'Traversal').should('be.visible');
    cy.get('.banner > .container').should('not.contain', 'Traversal');
    cy.contains('Traversal').click();
    cy.get('.banner > .container').should('contain', 'Traversal');
  })
})