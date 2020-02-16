import LoginPage from "../../page-objects/pages/LoginPage"
import HomePage from "../../page-objects/pages/HomePage"
import TopNavbar from "../../page-objects/components/TopNavbar"
import Tabs from "../../page-objects/components/Tabs"

describe("Login Test", () => {
    const homePage = new HomePage()
    const loginPage = new LoginPage()
    const topNavbar = new TopNavbar()
    const tabs = new Tabs()

    describe("Login Failed Test", () => {
    
        before(function() {
            homePage.visit()
        })
    
        it("should display login form", function() {
           topNavbar.clickOnSigninButton()
        })
    
        it("should attempt to login with invalid credentials", function() {
            loginPage.login("invalid username", "invalid password")
        })
    
        it("should display an error message", function() {
            loginPage.showErrorMessage()        
        })
    
    })
    
    describe("Login Success Test", () => {
        before(function() {
            homePage.visit()
        })
    
        it("should display login form", function() {
            topNavbar.clickOnSigninButton()
        })
    
        it("should login to application", function() {
            loginPage.login("username", "password")
        })
    
        it("should display navbar tabs after login", function() {
            tabs.shouldBeVisible()    
        })
    
        it("should logout from application and be returned to homepage", function() {
            topNavbar.logoutOfApplication()
            homePage.caraouselIsVisible()
        })
    
    })
})

