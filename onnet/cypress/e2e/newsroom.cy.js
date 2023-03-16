describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('.navbar-brand h1 span').eq(0).should('have.text', "News")
  })
})