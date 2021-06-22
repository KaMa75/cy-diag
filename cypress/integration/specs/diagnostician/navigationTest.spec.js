/// <reference types="cypress" />

import headbarHeaders from '../../../data/headbarHeaders';
import colors from '../../../data/colors';

import { navigationBar } from '../../page-objects/navigationBar.po';
import { headBar } from '../../page-objects/headBar.po';

describe('Test navigation buttons - Diagnostician', () => {

    before('Log In to app', () => {
        cy.logInToAdminApp(Cypress.env('users').diagnostician);
    });

    it('Should go to correct screen, active button has correct color, headbar has correct header', () => {

        navigationBar.goToTests().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.tests);

        navigationBar.goToClients().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.clients);
    });

    after('Log out', () => {
        cy.logOut();
    });

});
