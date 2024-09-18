import LoginPage from '../pages/loginPage';

describe('Swag Labs Login', () => {
    const loginpage = new LoginPage();

    beforeEach(() => {
        loginpage.visit();
    })
    it('should successfully login with valid username and valid password', () => {
        cy.fixture('user').then(user => {
            loginpage.login(user.validUser.username, user.validUser.password);
            loginpage.verifyLoginSuccess();
        });
        loginpage.verifyLoginSuccess();
    })

    it('Not able to login with invalid credentials', () => {
        cy.fixture('user').then(user => {
            loginpage.login(user.invalidUser.username, user.invalidUser.password)
        })
        loginpage.verifyLoginFailure();
    })

})