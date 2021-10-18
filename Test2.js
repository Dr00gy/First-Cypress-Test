const { get } = require("http")

describe('Get on the webpage', () => {
    it('Visits Poski', () => {
      cy.visit('https://www.poski.com/')
    })
})

describe('Change webpage', () => {
    it('Transitions to a page with a form', () => {
      //není to přes submenuv navigaci
      cy.get('[id=menu-btn]').click()
      cy.get('span').contains('Kariéra').click({force: true})
      cy.url().should('include', '/kariera')
      cy.get('div.swiper-button.swiper-button-next').click({multiple: true}).click({multiple: true})
      cy.get('div.swiper-slide.wt-inline > a.btn').eq(4).click()
      
    
    })
})    

describe('Fill out form', () => {
    it('Fills and submits form', () => {
      cy.get('[id=name]').type('Jan Novák').should('have.value', 'Jan Novák')
      cy.get('[id=email]').type('j.novak@email.cz').should('have.value', 'j.novak@email.cz')
      cy.get('[id=phone]').type('111222333').should('have.value', '111222333')
      //posílání životopisu
      cy.fixture('zivotopis.pdf').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'zivotopis.pdf',
            mimeType: 'application/pdf'
        })
    })
      cy.get('[id=message]').type('Dobrý den.').should('have.value', 'Dobrý den.')
      cy.get('button').contains('Poslat životopis').click()
    })
})
