describe('E2E Automation', () => {
  it('First Test', () => {
    cy.visit('/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('div.product:visible').should('have.length', 4);

    // Assign into a parameter
    cy.get('.products').as('productsLocator');
    cy.get('@productsLocator').find('.product').as('productLocator');

    // Refer parameter
    cy.get('@productLocator').should('have.length', 4);

    // Loop each product
    cy.get('@productLocator').each(($el, index, $list) => {
      const prodName = $el.find('h4.product-name').text();

      if (prodName.includes('Capsicum')) {
        $el.find('button').trigger('click'); // 1st Click
        cy.wrap($el).find('button').click(); // 2nd Click
      }
    });
  });
});
