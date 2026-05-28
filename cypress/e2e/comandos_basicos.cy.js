/// <reference types="cypress"/>

describe("Comandos basicos", () => {
  it("Acessar uma url", () => {
    cy.visit("https://automationpratice.com.br/login");
  });

  it("Encontrar um elemento", () => {
    cy.visit("https://automationpratice.com.br/login");

    //usando get
    cy.get("#user");

    //usando find()
    //diminui o escopo com get e seleciona com find
    cy.get(".mc-form").find(".form-control");

    //usando contains - seleciona um elemento por texto
    cy.get(".mc-form").contains("Send");
  });

  it("Preencher um campo", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#user").type("teste@teste.com");
    cy.get("#password");
    cy.get(".mc-form").find(".form-control").type("email@teste.com{enter}");
  });

  it("Click", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#btnLogin").click();
    cy.get("#btnLogin").rightclick();
    cy.get("#btnLogin").dblclick();
  });

  it("Select", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");
    //pelo nome da opção a ser selecionada
    cy.get("#country").select("usa");
    //pela posição na lista
    cy.get("#country").select(1);
  });

  it("Checkbox/Radio", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");
    cy.get("#materialUnchecked").check();
    cy.get("#materialUnchecked").uncheck();

    cy.get("#css").check();
  });

  it("Validar um elemento", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#user").type("teste@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();

    cy.get("#swal2-title")
      .should("be.visible")
      .should("have.text", "Login realizado");
  });
});
