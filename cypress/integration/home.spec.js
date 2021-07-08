describe("All pages", () => {
  it("'home' page works", () => {
    cy.visit("http://localhost:8000/")
    cy.contains("Bem-vindos à Insidepipe")
  })

  it("'empresa' page works", () => {
    cy.visit("http://localhost:8000/empresa")
    cy.contains("Missão")
  })

  it("'serviços - diagnotisco' page works", () => {
    cy.visit("http://localhost:8000/servicos/diagnostico-e-consultoria")
    cy.contains("DIAGNÓSTICO E CONSULTORIA")
  })

  it("'serviços - sistemas drenagem' page works", () => {
    cy.visit("http://localhost:8000/servicos/sistemas-de-drenagem")
    cy.contains(
      "SISTEMAS DE DRENAGEM DE ÁGUAS RESIDUAIS, DOMÉSTICAS E PLUVIAIS"
    )
  })

  it("'serviços - sistemas adução' page works", () => {
    cy.visit("http://localhost:8000/servicos/sistemas-de-aducao")
    cy.contains("SISTEMAS DE ADUÇÃO E DISTRIBUIÇÃO DE ÁGUA")
  })

  it("'água' page works", () => {
    cy.visit("http://localhost:8000/agua")
    cy.contains("Um bem Essencial")
  })

  it("'notícias' page works", () => {
    cy.visit("http://localhost:8000/noticias")
    cy.contains("NOTÍCIA COMPLETA")
  })

  it("'contactos' page works", () => {
    cy.visit("http://localhost:8000/contactos")
    cy.contains("Fale connosco!")
  })
})
