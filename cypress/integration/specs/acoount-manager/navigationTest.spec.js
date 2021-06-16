/// <reference types="cypress" />

import users from '../../../data/usersData';
import headbarHeaders from '../../../data/headbarHeaders';
import colors from '../../../data/colors';

import { navigationBar } from '../../page-objects/navigationBar.po';
import { headBar } from '../../page-objects/headBar.po';

describe('Test navigation buttons - Account Manager', () => {

    before('Log In to app', () => {
        cy.logInToAdminApp(users.accountManager);
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
