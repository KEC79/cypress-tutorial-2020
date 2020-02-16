describe("Searchbox Test", () => {
	before(function() {
		cy.visit("http://zero.webappsecurity.com/index.html")
		cy.url().should("include", "index.html")
		cy.title().should(
			"contain",
			"Zero - Personal Banking - Loans - Credit Cards"
		)
	})

    it("should display feedback form", () => {
        cy.get("#feedback").as("Link_Feedback")

        cy.get("@Link_Feedback").click()
        cy.get("#feedback-title").should("be.visible").contains("Feedback")
        cy.get("form").should("be.visible")
    })

    it("should submit feedback form", () => {
        cy.get("#name").as("Form_Name")
        cy.get("#email").as("Form_Email")
        cy.get("#subject").as("Form_Subject")
        cy.get("#comment").as("Form_Comment")
        cy.get(".btn-signin").as("Submit_Button")

        cy.get("@Form_Name").type("Kim")
        cy.get("@Form_Email").type("test@test.com")
        cy.get("@Form_Subject").type("This is a subject")
        cy.get("@Form_Comment").type("This is a comment")
        cy.get("@Submit_Button").click()

        cy.get(".offset3").contains("Thank you for your comments, Kim.")
    })
})
