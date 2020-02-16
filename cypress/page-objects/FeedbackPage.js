import BasePage from "./BasePage";

class FeedbackPage extends BasePage {
    
    feedbackFormIsVisible() {
        cy.get("form").should("be.visible")
    }

    fillOutFeedbackForm(name, email, subject, comment) {
        cy.get("#name").as("Form_Name")
        cy.get("#email").as("Form_Email")
        cy.get("#subject").as("Form_Subject")
        cy.get("#comment").as("Form_Comment")

        cy.get("@Form_Name").type(name)
        cy.get("@Form_Email").type(email)
        cy.get("@Form_Subject").type(subject)
        cy.get("@Form_Comment").type(comment)
    }

    submitFeedbackForm() {
        cy.get(".btn-signin").as("Submit_Button")
        cy.get("@Submit_Button").click()
    }

    showSuccessMessage() {  
        cy.get(".offset3").contains("Thank you for your comments, Kim.")
    }
}

export default FeedbackPage