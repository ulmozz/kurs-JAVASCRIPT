describe('taxpayers API features', () => {
  beforeEach(() => {
    cy.fixture("server.json").then((server) => {
        cy.visit(server.baseURL)
    })
    // cy.visit('http://localhost:3000/')
  })

  it('contains subs text', () => {
    cy.fixture("server.json").then((server) => {
        cy.request(server.taxpayerApiUrl).should((response) => {
            console.log(response)
            expect(response.status).to.eq(200)
            expect(response).to.have.property('body')
            expect(response.body).to.be.an('Array')
            expect(response.body).to.have.length.of.at.least(1)
            expect(response.body[0]).to.have.property('pesel')
            expect(response.body[0].pesel).eq('12345678905')
            expect(response.body[0]).to.have.property('firstName')
            expect(response.body[0].firstName).eq('Vendago')
            expect(response.body[0]).to.have.property('lastName')
            expect(response.body[0].lastName).eq('Porrokulem')
        })
    })
  })

  
})

