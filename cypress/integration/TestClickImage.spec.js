
describe('Check for text', () => {
    it('Test One', () => {
        
        cy.visit('www.axoni.com/company/')
        expect(cy.get('[alt="/wp-content/uploads/2017/09/Untitled-1_0008_Citi-logo-D7212B58B7-seeklogo.com-Copy.png"]')).to.exist
        cy.get('[alt="Citi"]')
            .should('be.visible')
        cy.get('a[href="https://online.citi.com/US/login.do"]').should('have.attr', 'target', '_blank')
        cy.get('[alt="/wp-content/uploads/2017/09/Untitled-1_0008_Citi-logo-D7212B58B7-seeklogo.com-Copy.png"]').click()
        

    })
})