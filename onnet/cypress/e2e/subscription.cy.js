describe('our example', () => describe('our example', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  it('contains link to GitHub repository', () => {
    //cy.pause();
    cy.contains('GitHub');
  })
}))

