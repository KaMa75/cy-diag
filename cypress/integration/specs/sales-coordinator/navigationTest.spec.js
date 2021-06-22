/// <reference types="cypress" />

import headbarHeaders from '../../../data/headbarHeaders';
import colors from '../../../data/colors';

import { navigationBar } from '../../page-objects/navigationBar.po';
import { headBar } from '../../page-objects/headBar.po';

Cypress.Screenshot.defaults({
    disableTimersAndAnimations: true
})

describe('Test navigation buttons - Sales Coordinator', () => {

    before('Log In to app', () => {
        cy.logInToAdminApp(Cypress.env('users').salesCoordinator);
    });

    it('Should go to correct screen, active button has correct color, headbar has correct header', () => {

        navigationBar.goToInstitutions().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.institutions);

        navigationBar.goToUsers().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.users);
    });

    after('Log out', () => {
        cy.logOut();
    });

});
