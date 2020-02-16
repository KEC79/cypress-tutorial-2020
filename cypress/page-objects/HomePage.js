import BasePage from "./BasePage"

class HomePage extends BasePage {
	visit() {
		cy.visit("http://zero.webappsecurity.com/index.html")
		cy.url().should("include", "index.html")
		cy.title().should(
			"contain",
			"Zero - Personal Banking - Loans - Credit Cards"
		)
	}

	caraouselIsVisible() {
		cy.get("#carousel").should("be.visible")
	}

	clickOnHomeLink() {
		cy.get("#homeMenu").click()
	}

	clickOnOnlineBankingLink() {
		cy.get("#onlineBankingMenu").click()
	}

	clickOnFeedbackLink() {
		cy.get("#feedback").click()
		cy.get("#feedback-title")
			.should("be.visible")
			.contains("Feedback")
	}
}

export default HomePage
