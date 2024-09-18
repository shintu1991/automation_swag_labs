import Loginpage from '../pages/loginPage';
import ProductPage from '../pages/productPage';

describe('Verify the products page', () => {
    const loginpage = new Loginpage();
    const productpage = new ProductPage();

    beforeEach(() => {
        loginpage.visit();
        cy.fixture('user').then((user) => {
            loginpage.login(user.validUser.username, user.validUser.password);
        });
    });

    it('should display products on the inventory page', () => {
        productpage.isProductDisplayed();
    });

    it('should add a product to the cart', () => {
        productpage.addFirstProductToCart();
        productpage.goToCart();
        productpage.verifyProductAddedToCart();
    })
});