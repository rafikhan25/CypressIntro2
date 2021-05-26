describe('Check new pages', () => {
    it('Test One', () => {
        //ensures that clicking on the "Technology" header redirects you to the proper page
        cy.visit('www.axoni.com/company/')
        cy.contains('Technology').click()
        cy.url().should('include','/technology/')
    })

    it('Test Two', () => {
        //ensures that clicking on the "Company" header redirects you to the proper page
        cy.visit('www.axoni.com/company/')
        cy.contains('Company').click()
        cy.url().should('include','company')
    })

    it('Test Three', () => {
        //ensures that clicking on the "News & Press" header redirects you to the proper page
        cy.visit('www.axoni.com/company/')
        cy.contains('News & Press').click()
        cy.url().should('include','news')
    })

    it('Test Four', () => {
        //ensures that clicking on the "Careers" header redirects you to the proper page
        cy.visit('www.axoni.com/company/')
        cy.contains('Careers').click()
        cy.url().should('include','careers')
    })
})