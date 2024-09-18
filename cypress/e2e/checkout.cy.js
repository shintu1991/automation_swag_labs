import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CheckoutPage from "../pages/checkoutPage";

describe('verify the checkout functionality', () => {
    const loginPage = new LoginPage();
    const productpage = new ProductPage();
    const checkout = new CheckoutPage();

    beforeEach(() => {
        loginPage.visit();
        cy.fixture('user').then((user) => {
            loginPage.login(user.validUser.username, user.validUser.password);
        })

        productpage.addFirstProductToCart();
        productpage.goToCart();
        checkout.checkoutButton();
    })

    it('should fill the checkout information', () => {
        checkout.fillChekoutInformation('John', 'Doe', '98004');
        checkout.verifyCheckoutPage();
    });

    it('should be able to complete the order', () => {
        checkout.fillChekoutInformation('John', 'Doe', '98004');
        checkout.completeOrder();
        checkout.verifyOrderCompletion();
    });
});