
class RecoverPass {
    get emailInput () {
        return cy.get('input[name="login"]');
    }

    get sendButton () {
        return cy.contains('button', 'Wyślij');
    }

    get returnToLogInPageButton () {
        return cy.contains('button', 'Wróć na ekran logowania');
    }

    clickSendButton() {
        return this.sendButton.click();
    }

    clickReturnToLogInPageButton() {
        return this.returnToLogInPageButton.click();
    }
    
}

export const recoverPass = new RecoverPass();
