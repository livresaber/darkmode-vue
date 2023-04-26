// https://docs.cypress.io/api/introduction/api.html

describe('Test DarkMode', () => {
  it('test light mode', () => {
    cy.visit('/')
    cy.contains('LightMode')
    cy.get('[aria-label="Icon Light Mode"]').should('exist')
  })
  it('test dark mode', () => {
    cy.get('.btn-mode').click()
    cy.contains('DarkMode')
    cy.get('[aria-label="Icon Dark Mode"]').should('exist')
  })
})
