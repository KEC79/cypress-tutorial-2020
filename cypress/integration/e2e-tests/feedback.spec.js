import HomePage from "../../page-objects/pages/HomePage"
import FeedbackPage from "../../page-objects/pages/FeedbackPage"

describe("Feedback Test", () => {
    const homePage = new HomePage()
    const feedbackPage = new FeedbackPage()

	before(function() {
		homePage.visit()
	})

    it("should display feedback form", () => {
        homePage.clickOnFeedbackLink()
        feedbackPage.feedbackFormIsVisible()
    })

    it("should submit user feedback", () => {
        feedbackPage.fillOutFeedbackForm("Kim", "Test@test.com", "This is a subject", "This is a comment")
        feedbackPage.submitFeedbackForm()
    })

    it("should display a success message", () => {
        feedbackPage.showSuccessMessage()
    })
})
