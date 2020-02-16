describe("Browser actions 2", () => {
	it("Should load books website", () => {
		cy.visit("http://books.toscrape.com/index.html", { timeout: 10000 })
        cy.url().should("include", "index.html")
        cy.log("Before reload")
        cy.reload()
        cy.log("After reload")
	})

	it("Should open poetry category", () => {
		cy.get("a")
			.contains("Poetry")
			.click()
		cy.get("h1").contains("Poetry")
	})

	it("Should open Olio book page", () => {
		cy.get("a")
			.contains("Olio")
			.click()
		cy.get("h1").contains("Olio")
	})

	it("Should show correct price of book", () => {
		cy.get(".price_color").contains("£23.88")
	})
})

// describe("Browser Actions", () => {
// 	it("Should load books website", () => {
// 		cy.visit("http://books.toscrape.com/index.html", { timeout: 10000 })
// 		cy.url().should("include", "index.html")
// 	})

// 	it("Should click on travel category", () => {
// 		cy.get("a")
// 			.contains("Travel")
// 			.click()
// 		cy.get("h1").contains("Travel")
// 	})

// 	it("Should display correct number of books", () => {
// 		cy.get(".product_pod")
// 			.its("length")
// 			.should("eq", 11)
// 	})
// })

// describe("Browser actions", () => {
//     it("should load correct url", () => {
//         cy.visit("http://example.com/", {timeout: 10000})
//     })

//     it("Should correct correct url", () => {
//         cy.url().should("include", "example.com")
//     })

//     it("Should wait for 3 seconds", () => {
//         cy.wait(3000)
//     })

//     it("Should pause the execution", () => {
//          cy.pause()
//     })

//     it("Should check for correct element on the page", () => {
//         cy.get("h1").should("be.visible")
//     })
// })

// describe("My first simple test", () => {
//     it("True should be true", () => {
//         expect(true).to.equal(true)
//     })

//     it("5 should be 5", () => {
//         expect(5).to.equal(5)
//     })
// })

// describe("Another describe block", () => {
//     it(" False should be false", () => {
//         expect(false).to.equal(false)
//     })
// })
