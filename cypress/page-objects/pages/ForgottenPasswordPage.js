import BasePage from "./BasePage";

class ForgottenPasswordPage extends BasePage {
    shouldExist() {
        cy.get("#send_password_form").should("be.visible")
        cy.url().should("include", "forgot-password.html")
    }

    fillEmail(email) {
        cy.get("#user_email").type(email)
    }

    submitEmail() {
        cy.contains("Send Password").click()
    }

    showSuccessMessage() {
        cy.get("h3").contains("Forgotten Password")
        cy.url().should("include", "forgotten-password-send.html")
        cy.get(".offset3").contains("Your password will be sent to the following email: test@test.com")
    }

}

export default ForgottenPasswordPage