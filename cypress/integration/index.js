//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// Please read our "Introduction to Cypress"
// https://on.cypress.io/introduction-to-cypress

describe('Index page', function () {
  it('.should() - assert that <title> is correct', function () {
    // https://on.cypress.io/visit
    cy.visit('http://localhost:3000')

    cy.title().should('include', 'Starter Project')
      cy.get('#starter-h1').should('contain', 'Bootstrap starter template')
      cy.get('#users-api-title').should('contain', 'Example users API call')
  })

  it('should register button click', function () {
    cy.visit('http://localhost:3000')
    cy.title().should('include', 'Starter Project')
      cy.get('#starter-h1').should('contain', 'Bootstrap starter template')
      cy.get('#frontpage-test-btn').should('contain', 'Click me!')
      cy.get('#frontpage-test-btn').click()
      cy.get('#starter-h1').should('contain', 'Button has been clicked!')
  })

})

