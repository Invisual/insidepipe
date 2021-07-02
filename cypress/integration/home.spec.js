describe("Home", () => {
  it("shows the welcome title", () => {
    cy.visit("http://localhost:8000/")
    cy.contains("Bem-vindos à Insidepipe")
  })
})
