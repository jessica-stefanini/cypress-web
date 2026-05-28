/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
const checkoutPage = require ("../support/pages/checkout_page");

describe("Checkout", () => {
  beforeEach(() => {
    cy.visit("/checkout-one");
  });

  it("Teste 1", () => {
    checkoutPage.fillBillingForm()
    checkoutPage.saveBilling()
    checkoutPage.validateBillingSuccess()
    checkoutPage.selectPaypal()
    checkoutPage.placeOrder()
    checkoutPage.validateSuccessOrder()
  });
});
