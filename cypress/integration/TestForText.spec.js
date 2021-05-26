

describe('Check for text', () => {
    it('Test One', () => {
        cy.visit('www.axoni.com/company/')
        //ensures that the header text "Directors" exists on the page
        expect(cy.contains('Directors')).to.exist
        //ensures that the string "Greg Schvey" exists on the page under Directors
        expect(cy.contains('Greg Schvey')).to.exist
        //ensures that the string "Greg is a repeat entrepreneur and drives Axoni’s strategic execution." exists on the page under Greg's section
        expect(cy.contains('Greg is a repeat entrepreneur and drives Axoni’s strategic execution.')).to.exist
        //ensures that the string "Technology" exists in the upper right section of the page
        expect(cy.contains('Technology')).to.exist
        })
    })
