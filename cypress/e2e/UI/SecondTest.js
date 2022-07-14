describe('E2E Automation', () => {
  it('Second Test', () => {
    cy.visit('/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);

    // Assign into a parameter
    cy.get('.products').as('productsLocator');
    cy.get('@productsLocator').find('.product').as('productLocator');

    // Loop each product
    cy.get('@productLocator').each(($el, index, $list) => {
      $el.find('button').trigger('click');
    });

    cy.get('.cart-icon > img').click();

    cy.get('button').contains('PROCEED TO CHECKOUT').click();
    cy.wait(2000);
    cy.get('button').contains('Place Order').click();
  });
});
