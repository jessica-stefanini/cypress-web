class CadastroPage {
  preencheUsuario(nome) {
    cy.get("#user").type(nome);
  }

  preencheEmail(email) {
    cy.get("#email").type(email);
  }

  preencheSenha(senha) {
    cy.get("#password").type(senha);
  }

  clicarCadastrar() {
    cy.get("#btnRegister").click();
  }

  validarCadastroComSucesso(name) {
    cy.get("#swal2-title")
      .should("be.visible")
      .and("have.text", "Cadastro realizado!");

    cy.get("#swal2-html-container")
      .should("be.visible")
      .and("have.text", `Bem-vindo ${name}`);
  }
  realizarCadastro(name, email, senha) {
    cy.get("#user").type(name);
    cy.get("#email").type(email);
    cy.get("#password").type(senha);
    cy.get("#btnRegister").click();
  }
}

module.exports = new CadastroPage();
