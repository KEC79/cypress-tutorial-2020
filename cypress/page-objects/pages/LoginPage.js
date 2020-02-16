import BasePage from "./BasePage";

class LoginPage extends BasePage {
    clickForgottenPasswordLink() {
        cy.contains("Forgot your password ?").click()
    }
}

export default LoginPage