import { faker } from "@faker-js/faker";

export function fillBillingForm() {
  cy.get("#fname").type(faker.person.firstName());
  cy.get("#lname").type(faker.person.lastName());
  cy.get("#cname").type(faker.company.name());
  cy.get("#email").type(faker.internet.email());
  cy.get("#country").select("usa");
  cy.get("#city").select("Aland Islands");
  cy.get("#zip").type(faker.location.zipCode());
  cy.get("#faddress").type(faker.location.streetAddress());
  cy.get("#messages").type("teste");
}

export function saveBilling() {
  cy.get("#materialUnchecked").check();
  cy.contains("button", "Save").click();
}

export function validateBillingSuccess() {
  cy.get(".check-out-form h3").should(
    "contain",
    "Billings Information registred with success!",
  );
}

export function selectPaypal() {
  cy.get("#css").check();
}

export function placeOrder() {
  cy.contains("button", "Place Order").click();
}

export function validateSuccessOrder() {
  cy.contains("h2", "Order success!").should("be.visible");
}
