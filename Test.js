describe('Get on the webpage', () => {
    it('Visits Poski', () => {
      cy.visit('https://www.poski.com/')
    })
})

describe('Change webpage', () => {
    it('Transitions to a page with a form', () => {
      cy.get('header').contains('Nezávazná poptávka').click()
      cy.url().should('include', '/nezavazna-schuzka')
    })
})    

describe('Fill out form', () => {
    it('Fills and submits form', () => {
      cy.get('[id=produkt-button]').click()
      cy.get('li').contains('Poski Webdesign').click()
      cy.get('[id=jmeno-prijmeni]').type('Jan Novák').should('have.value', 'Jan Novák')
      cy.get('[id=telefon]').type('111222333').should('have.value', '111222333')
      cy.get('[id=email]').type('j.novak@email.cz').should('have.value', 'j.novak@email.cz')
      cy.get('button').contains('Odeslat formulář').click()
    })
}) 