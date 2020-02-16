import HomePage from "../../page-objects/pages/HomePage"
import TopNavbar from "../../page-objects/components/TopNavbar"
import SearchResultsPage from "../../page-objects/pages/SearchResultsPage"

describe("Searchbox Test", () => {
	const homePage = new HomePage()
	const topNavbar = new TopNavbar()
	const searchResultsPage = new SearchResultsPage()

	before(function() {
		homePage.visit()
	})

	it("should search for value using searchbox", () => {
		topNavbar.search("bank")
	})

	it("should display search results page", () => {
		searchResultsPage.displayTitle()
	})

	it("should load homepage again", () => {
		cy.go("back")
		cy.url().should("include", "index.html")
	})
})
