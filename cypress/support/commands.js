// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();


import envUrls from '../data/envsUrls';
import { logInPage } from '../integration/page-objects/loginPage.po';

Cypress.Commands.add('goToAdminAppLoginPage', () => {
    cy.visit(envUrls.devAdmin);
});

Cypress.Commands.add('logInToAdminApp', (user) => {
    cy.goToAdminAppLoginPage();
    logInPage.logIn(user);
    cy.wait(1000);
});

Cypress.Commands.add('logOut', () => {
    cy.contains('Wyloguj').click();
});
