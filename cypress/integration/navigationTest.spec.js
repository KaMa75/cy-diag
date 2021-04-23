/// <reference types="cypress" />

import users from '../data/usersData';
import headbarHeaders from '../data/headbarHeaders';
import colors from '../data/colors';
import { navigationBar } from './page-objects/navigationBar.po';
import { headBar } from './page-objects/headBar.po';

describe('Test navigation buttons', () => {

    before('Log In to app', () => {
        cy.logInToAdminApp(users.facCoordinator);
    });

    it('Should go to correct screen, active button has correct color, headbar has correct header', () => {

        navigationBar.goToTests().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.tests);

        navigationBar.goToInstitution().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.institution);

        navigationBar.goToDiagnosticians().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.diagnosticians);

        navigationBar.goToReports().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.reports);

        navigationBar.goToClients().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.clients);
    });

});
