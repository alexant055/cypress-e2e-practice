describe('Automation Practice', () => {
  it('Dropdown - Tests', () => {
    cy.visit('/');

    // Static Dropdown
    cy.get('select').select('option3').should('have.value', 'option3');

    // Dynamic Dropdown
    cy.get('#autocomplete').type('ind');
    cy.wait(2000);
    cy.get('.ui-menu-item').each(($el, index, $list) => {
      if ($el.find('div').text() === 'India') $el.trigger('click');
    });
    cy.get('#autocomplete').should('have.value', 'India');
  });
});
