describe('Automation Practice', () => {
  it('CheckBox - Tests', () => {
    cy.visit('/');

    // Check an element
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1');

    // Uncheck an element
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    // Check all elements
    cy.get('input[type="checkbox"]').check().should('be.checked');

    // Uncheck all elements
    cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');

    // Check specific elements by comapring it's value
    cy.get('input[type="checkbox"]')
      .check(['option2', 'option3'])
      .should('be.checked');
  });
});
