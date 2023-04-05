describe('Teste ComicsCards', () => {
    it('Adicionar item ao carrinho', () => {
      cy.visit('/comics');
  
      cy.get('a:first').click();
      cy.get('button').contains('Adicionar ao carrinho').click();
  
      cy.get('a[href="/cart"]').click();
      cy.contains('h2', 'Carrinho de Compras');
      cy.get('table > tbody > tr').should('have.length', 1);
    });
  });