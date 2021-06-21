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
import "cypress-localstorage-commands";

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

Cypress.Commands.add('parseDate', (dateString) => {
    const splittedDate = dateString.split(/\/|, |:/);
    const date = new Date(parseInt(splittedDate[2]), parseInt(splittedDate[1]) - 1, parseInt(splittedDate[0]), parseInt(splittedDate[3]), parseInt(splittedDate[4]));
    return Date.parse(date);
});
