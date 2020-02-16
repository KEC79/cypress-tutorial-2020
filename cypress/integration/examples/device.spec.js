describe("Device Tests", () => {
    it("720p", () => {
        cy.viewport(1280,720)
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })

    it("1080p", () => {
        cy.viewport(1980,1080)
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })

    it("iphone X", () => {
        cy.viewport("iphone-x")
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })

    it("ipad Mini", () => {
        cy.viewport("ipad-mini")
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })

    it("samsung note 9", () => {
        cy.viewport("samsung-note9")
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })

    it("samsung s10", () => {
        cy.viewport("samsung-s10")
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })
})