describe('Test DarkMode', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should start in light mode', () => {
    cy.contains('LightMode');
    cy.get('[aria-label="Icon LightMode"]').should('exist');
    cy.get('body').should('not.have.class', 'darkmode');
  });

  it('should switch to dark mode', () => {
    cy.get('.btn-mode').first().click();
    cy.contains('DarkMode');
    cy.get('[aria-label="Icon DarkMode"]').should('exist');
    cy.get('body').should('have.class', 'darkmode');
    cy.window().then((win) => {
      expect(JSON.parse(win.localStorage.getItem('darkmode'))).to.be.true;
    });
  });

  it('should switch back to light mode', () => {
    cy.get('.btn-mode').first().click();
    cy.get('.btn-mode').first().click(); // Switch to Dark Mode
    cy.contains('DarkMode');
    cy.get('[aria-label="Icon DarkMode"]').should('exist');
    cy.get('body').should('have.class', 'darkmode');

    // Switch back to Light Mode
    cy.get('.btn-mode').first().click();
    cy.contains('LightMode');
    cy.get('[aria-label="Icon LightMode"]').should('exist');
    cy.get('body').should('not.have.class', 'darkmode');
    cy.window().then((win) => {
      expect(JSON.parse(win.localStorage.getItem('darkmode'))).to.be.false;
    });
  });
});
