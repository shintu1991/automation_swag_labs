class LoginPage {

    visit() {
        cy.visit('/')
    }

    enterUsername(username) {
        cy.get('#user-name').type(username);
    }

    enterPassword(password) {
        cy.get('#password').type(password);
    }

    clickLogin() {
        cy.get("[type='submit']").click();
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/inventory');
        cy.get('.title').should('contain', 'Products');
    }
    verifyLoginFailure() {
        cy.get('[data-test="error"]').should('contain', "Username and password do not match")
    }

}

export default LoginPage;