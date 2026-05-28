/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
//const cadastro_page = require("../support/pages/cadastro_page")
import cadastro_page from "../support/pages/cadastro_page";

describe("Cadastro", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  const name = faker.person.firstName();
  const email = faker.internet.email();
  const senha = faker.internet.password({ length: 6 });

  it("Cadastro com sucesso", () => {
    cadastro_page.preencheUsuario(name);
    cadastro_page.preencheEmail(email);
    cadastro_page.preencheSenha(senha);
    cadastro_page.clicarCadastrar();
    cadastro_page.validarCadastroComSucesso(name);
  });

  it("Cadastro com nome vazio", () => {
    cadastro_page.preencheEmail(email);
    cadastro_page.preencheSenha(senha);
    cadastro_page.clicarCadastrar();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .should("have.text", "O campo nome deve ser prenchido");
  });

  it("Cadastro com email vazio", () => {
    cadastro_page.preencheUsuario(name);
    cadastro_page.preencheSenha(senha);
    cadastro_page.clicarCadastrar();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .should("have.text", "O campo e-mail deve ser prenchido corretamente");
  });

  it("Cadastro com senha vazia", () => {
    cadastro_page.preencheUsuario(name);
    cadastro_page.preencheEmail(email);
    cadastro_page.clicarCadastrar();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .should("have.text", "O campo senha deve ter pelo menos 6 dígitos");
  });

  it("Cadastro com email inválido", () => {
    cadastro_page.preencheUsuario(name);
    cadastro_page.preencheEmail(senha);
    cadastro_page.preencheSenha(senha);
    cadastro_page.clicarCadastrar();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .should("have.text", "O campo e-mail deve ser prenchido corretamente");
  });

  it("Cadastro com senha menor que 6", () => {
    cadastro_page.preencheUsuario(name);
    cadastro_page.preencheEmail(email);
    cadastro_page.preencheSenha(123);
    cadastro_page.clicarCadastrar();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .should("have.text", "O campo senha deve ter pelo menos 6 dígitos");
  });
});
