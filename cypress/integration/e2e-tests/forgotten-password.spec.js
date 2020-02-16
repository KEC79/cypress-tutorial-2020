import HomePage from "../../page-objects/pages/HomePage"
import TopNavbar from "../../page-objects/components/TopNavbar"
import LoginPage from "../../page-objects/pages/LoginPage"
import ForgottenPasswordPage from "../../page-objects/pages/ForgottenPasswordPage"

describe("Forgotten Password Test", () => {
	const homePage = new HomePage()
    const topNavbar = new TopNavbar()
    const loginPage = new LoginPage()
    const forgottenPasswordPage = new ForgottenPasswordPage()

	before(function() {
		homePage.visit()
	})

	it("should display login form", () => {
		topNavbar.clickOnSigninButton()
    })
    
    it("should display forgotten password form", () => {
        loginPage.clickForgottenPasswordLink()
        forgottenPasswordPage.shouldExist()
    })

    it("should submit forgotten password form", () => {
        forgottenPasswordPage.fillEmail("test@test.com")
        forgottenPasswordPage.submitEmail()
    })

    it("should display success message", () => {
        forgottenPasswordPage.showSuccessMessage()
    })
})

