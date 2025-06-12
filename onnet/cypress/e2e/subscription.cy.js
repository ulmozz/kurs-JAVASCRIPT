describe('subscription features', () => {
  beforeEach(() => {
    cy.fixture("server").then((server) => {
        cy.visit(server.baseURL)
    })
    // cy.visit('http://localhost:3000/')
  })

  it('contains subs text', () => {
    //cy.pause();
    cy.contains('Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd');
  })

  it('contains unique element containing subs text', () => {
    //cy.pause();
    cy.get('#subscription-text');
    cy.get('[data-test-id="subscription-text"]')
  })

  it('contains link for reading more', () => {
    //cy.pause();
            // Test nam wywala błąd po wejsciu na strone yarrl.pl więc musimy go tu obsłużyć żeby go ignorował
            cy.origin('https://www.yarrl.pl', () => {
                cy.on('uncaught:exception', (err) => {
                // Ignoruj znane błędy JS ze strony yarrl
                if (err.message.includes('$ is not defined')) {
                    return false;
                    }
                });
            });
            // Tu się kończy obsługa błędu
    cy.get('[data-test-id="subscription-text"] a').click();
    
    cy.origin('https://www.yarrl.pl', () => {
            cy.url().should('include','yarrl')
            });
  })
})

