describe('Basic tests', () => {

  it('Click on button', () => {
    cy.visit('https://commitquality.com/practice-general-components ')
    cy.get('.component-container').first().should('not.contain', 'Button clicked');
    cy.get('.buttons-container').should('not.contain', 'Button clicked');
    cy.contains('Button clicked').should('not.exist');
    cy.get('[data-testid="basic-click"]').click()
    cy.get('.component-container').first().should('contain', 'Button clicked');
    cy.get('.buttons-container').should('contain', 'Button clicked');
    cy.contains('Button clicked').should('exist');
  })
  
})