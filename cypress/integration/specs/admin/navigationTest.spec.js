/// <reference types="cypress" />

import headbarHeaders from '../../../data/headbarHeaders';
import colors from '../../../data/colors';

import { navigationBar } from '../../page-objects/navigationBar.po';
import { headBar } from '../../page-objects/headBar.po';

describe('Test navigation buttons - Admin', () => {

    before('Log In to app', () => {
        cy.logInToAdminApp(Cypress.env('users').admin);
    });

    it('Should go to correct screen, active button has correct color, headbar has correct header', () => {

        navigationBar.goToInstitutions().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.institutions);

        navigationBar.goToSchools().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.schools);

        navigationBar.goToMovies().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.movies);

        navigationBar.goToPurchasePackages().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.purchasePackages);
        
        navigationBar.goToUsers().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.users);


        navigationBar.goToBatteries().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.batteries);

        navigationBar.goToTools().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.tools);

        navigationBar.goToReferenceGroup().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.referenceGroup);

        navigationBar.goToCategoricalScales().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.categoricalScales);


        navigationBar.goToPools().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.pools);
        
        navigationBar.goToQuestions().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.questions);

        navigationBar.goToAnswers().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.answers);
    });

    after('Log out', () => {
        cy.logOut();
    });

});
