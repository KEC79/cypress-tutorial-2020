class TopNavbar {

    search(text) {
        cy.get("#searchTerm").as("searchbox")
		cy.get("@searchbox").type(`${text} {enter}`)
		cy.url().should("include", `search.html?searchTerm=${text}`)
    }
}

export default TopNavbar