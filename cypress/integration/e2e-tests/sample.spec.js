describe("Home Page Test", () => {
	before(function() {
		cy.visit("/index.php")
		cy.url().should("include", "index.php")
		cy.title().should(
			"contain",
			"My Store"
		)
	})

    it("clicking 'women' category navigates to women clothing page", () => {
        cy.get('a[title="Women"]').click()
        cy.title().should('contain', 'Women - My Store')

    })

})

describe("Womens clothing page", () => {
    beforeEach(function() {
		cy.visit("/index.php?id_category=3&controller=category")
		cy.url().should("include", "index.php?id_category=3&controller=category")
		cy.title().should(
			"contain",
			"Women - My Store"
		)
	})

    it("can chose the subcategory of tops", () => {
        cy.get('.subcategory-image > a[title="Tops"]').click()
        cy.title().should('contain', 'Tops - My Store')
        cy.get('.category-name').contains('Tops').should('be.visible')
        cy.get('.product_list>li').its('length').should('eq', 2)
    })

    it("can select a top to buy", () => {
        cy.get('.product_list>li').eq(0).click()
        cy.title().should('contain', 'Faded Short Sleeve T-shirts - My Store')
        cy.get('.navigation-pipe').contains('Faded Short Sleeve T-shirts')
    })
})
