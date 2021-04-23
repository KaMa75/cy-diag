
class LoginPage {
    get emailInput () {
        return cy.get('input[name="login"]');
    }

    get passwordInput () {
        return cy.get('input[type="password"]');
    }

    get loginButton () {
        return cy.contains('button', 'Zaloguj');
    }

    logIn({login, password}) {
        this.emailInput.type(login);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
    
}

export const logInPage = new LoginPage();
