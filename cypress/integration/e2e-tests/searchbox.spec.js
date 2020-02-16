describe("Searchbox Test", () => {
	before(function() {
		cy.visit("http://zero.webappsecurity.com/index.html")
		cy.url().should("include", "index.html")
		cy.title().should(
			"contain",
			"Zero - Personal Banking - Loans - Credit Cards"
		)
	})

	it("should search for value using searchbox", () => {
		cy.get("#searchTerm").as("searchbox")
		cy.get("@searchbox").type("bank {enter}")
		cy.url().should("include", "search.html?searchTerm=bank")
	})

	it("should display search results page", () => {
		cy.get("h2").as("Title")
		cy.get("@Title").contains("Search Results:")
	})

	it("should load homepage again", () => {
		cy.go("back")
		cy.url().should("include", "index.html")
	})
})
