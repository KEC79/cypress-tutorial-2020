describe("Keyboard press simulation", () => {
    it("should submit search box by pressing enter", () => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get("#searchTerm").type("this is a search {enter}")
    })
})