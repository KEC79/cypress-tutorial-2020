import HomePage from "../../page-objects/HomePage"


describe("HomePage test", () => {
    beforeEach(function() {
		cy.visit("http://zero.webappsecurity.com/index.html")
		cy.url().should("include", "index.html")
		cy.title().should(
			"contain",
			"Zero - Personal Banking - Loans - Credit Cards"
		)
	})


    it("should display homepage correctly", () => {
        const homePage = new HomePage()
        homePage.visit()
        homePage.pause(5000)
        homePage.caraouselIsVisible()
    })

    it("should be able to open feedback page", () => {
        const homePage = new HomePage()
        homePage.clickOnFeedback()
    })

    it("should be able to open online banking page", () => {
        const homePage = new HomePage()
        homePage.clickOnOnlineBanking()
    })

    it("should be able to open homepage", () => {
        const homePage = new HomePage()
        homePage.clickOnHome()
        homePage.caraouselIsVisible()
    })
})