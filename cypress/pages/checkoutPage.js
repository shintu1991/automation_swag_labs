class CheckoutPage {
    checkoutButton() {
        cy.get('[data-test="checkout"]').click()
    }
    verifyCheckoutPage() {
        cy.url().should('include', '/checkout-step-two.html');
    }
    fillChekoutInformation(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
    }

    completeOrder() {
        cy.get('[data-test="finish"]').click();
    }

    verifyOrderCompletion() {
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
    }
}

export default CheckoutPage;