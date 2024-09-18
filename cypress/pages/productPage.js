class ProductPage {

    addFirstProductToCart() {
        cy.get('.inventory_item').first().find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    verifyProductAddedToCart() {
        cy.get('[data-test="item-quantity"]').should('contain', 1)
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }

    isProductDisplayed() {
        cy.get('.inventory_item').should('have.length.greaterThan', 0)
    }
}

export default ProductPage;