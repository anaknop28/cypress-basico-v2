Cypress.Commands.add('fillMandatoryFiedlsAndSubmit', function() {
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Knop')
    cy.get('#email').type('ana@teste,com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})