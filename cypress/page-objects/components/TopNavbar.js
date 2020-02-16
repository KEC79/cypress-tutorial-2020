class TopNavbar {

    search(text) {
        cy.get("#searchTerm").as("searchbox")
		cy.get("@searchbox").type(`${text} {enter}`)
		cy.url().should("include", `search.html?searchTerm=${text}`)
    }

    clickOnSigninButton() {
        cy.get("#signin_button").click()
        cy.get("#login_form").should("be.visible")
    }
}

export default TopNavbar