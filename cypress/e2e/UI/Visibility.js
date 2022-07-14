/// <reference types="Cypress" />

describe('Automation Practice', () => {
  it('Visibility - Tests', () => {
    cy.visit('/');

    cy.get('#displayed-text').should('be.visible');

    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');

    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');

    //radio buttons
    cy.get('[value="radio2"]').check().should('be.checked');
  });
});
