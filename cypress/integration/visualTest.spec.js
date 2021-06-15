/// <reference types="cypress" />

import { logInPage } from '../integration/page-objects/loginPage.po';
import { recoverPass } from '../integration/page-objects/recoverPassword.po';


describe('Visual test login pages', () => {

    it('Test login page', () => {
        cy.goToAdminAppLoginPage();

        logInPage.loginButton.then(() => {
            cy.wait(1000);
            cy.document().matchImageSnapshot('login');
        });

        logInPage.clickLoginButton().then(() => {
            cy.wait(2000);
            cy.document().matchImageSnapshot('login required fields errors');
        });
    });

    it('Test recover password page', () => {
        cy.goToAdminAppLoginPage();
        logInPage.clickForgotPasswordButton();

        recoverPass.sendButton.then(() => {
            cy.wait(2000);
            cy.document().matchImageSnapshot('forgot');
        });

        recoverPass.clickSendButton().then(() => {
            cy.wait(1000);
            cy.document().matchImageSnapshot('forgot required field errors');
        });
    });

});
