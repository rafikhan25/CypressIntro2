
describe('Check for text', () => {
    it('Test One', () => {
        cy.visit('www.axoni.com/company/')
        
        //clicks on the Technology link in the upper right
        cy.contains('Technology').click()

        //ensures that the redirected page is the Technology path page
        cy.url().should('include','/technology/')

        //ensures that the background image is visible to the user
        cy.get('#pjax-container').should('be.visible')

        //ensures that the modular architecture logo exists at the bottom
        expect(cy.get('[alt="modular architecture"]')).to.exist

        //ensures that the height and width of the modular architecture logo are the desired measurements
        cy.get('[alt="modular architecture"]')
            .should('have.css','width','100px')
            .should('have.css','height','80px')
    })
})