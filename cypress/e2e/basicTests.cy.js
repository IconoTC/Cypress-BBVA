describe('Basic tests', () => {
  const URL = "https://commitquality.com/practice-general-components";
  beforeEach('Visit the url for comitquality',() => {
    cy.visit(URL);
  })

  it.only('Click on button', () => {
    cy.get('.component-container').first().should('not.contain', 'Button clicked');
    cy.get('.buttons-container').should('not.contain', 'Button clicked');
    cy.contains('Button clicked').should('not.exist');
    cy.get('[data-testid="basic-click"]').should('be.enabled').click()
    cy.get('.component-container').first().should('contain', 'Button clicked');
    cy.get('.buttons-container').should('contain', 'Button clicked');
    cy.contains('Button clicked').should('exist');
  })

  it("double click button", () => {
    let double_button = cy.get('[data-testid="double-click"]').should("exist");
    cy.contains("Button double clicked").should("not.exist");
    double_button.click();
    cy.contains("Button double clicked").should("not.exist");
    double_button.dblclick();
    cy.contains("Button double clicked").should("exist");
  });



    it("right click button", () => {
      let rclick_button = cy.get('[data-testid="right-click"]').should("exist").and('contain', 'Right click me');
      let event_button_no_exist = ()  => {
        return cy.contains("Button right mouse clicked").should("not.exist");
    }
      rclick_button.dblclick();
      event_button_no_exist();
      rclick_button.click();
      event_button_no_exist();
      rclick_button.rightclick();
      cy.contains("Button right mouse clicked").should("exist"); 
      })

    it.only('I can check radio button and check correct message appears', () =>{
      cy.get('.radio-buttons-container').should('not.contain', 'option1 clicked')
      cy.get('.radio-buttons-container').should('not.contain', 'option2 clicked')
      cy.get('[data-testid = option1]').should('not.be.checked').check().should('be.checked');
      cy.get('.radio-buttons-container').should('contain', 'option1 clicked')
      cy.get('.radio-buttons-container').should('not.contain', 'option2 clicked')
      cy.get('[data-testid = option2]').check()
      cy.get('.radio-buttons-container').should('contain', 'option2 clicked')
      cy.get('.radio-buttons-container').should('not.contain', 'option1 clicked')
    })

    it('I can check radio button and check correct message appears', () =>{
    cy.contains('option2 clicked').should('not.exist');
    cy.contains('option1 clicked').should('not.exist');
    cy.get('[data-testid="option1"]').click()
    cy.contains('option1 clicked').should('exist');
    cy.contains('option2 clicked').should('not.exist');
    cy.get('[data-testid="option2"]').click()
    cy.contains('option2 clicked').should('exist');
    cy.contains('option1 clicked').should('not.exist');
    })
  })