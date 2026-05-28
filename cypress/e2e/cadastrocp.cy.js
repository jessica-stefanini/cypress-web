// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
const cadastro_page = require("../support/pages/cadastro_page");

describe("Cadastro", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("Cadastro com sucesso", () => {

     const usuario = {
      nome: faker.person.firstName(),
      email: faker.internet.email({ provider: "qazando.com" }),
      senha: faker.internet.password({ length: 6 }),
    };

    cadastro_page.realizarCadastro(usuario)
    cadastro_page.validarCadastroComSucesso(usuario.nome)
  
  })
  });