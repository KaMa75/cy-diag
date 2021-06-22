/// <reference types="cypress" />

import headbarHeaders from '../../../data/headbarHeaders';
import colors from '../../../data/colors';

import { navigationBar } from '../../page-objects/navigationBar.po';
import { headBar } from '../../page-objects/headBar.po';

describe('Test navigation buttons - Product Owner', () => {

    before('Log In to app', () => {
        cy.logInToAdminApp(Cypress.env('users').productOwner);
    });

    it('Should go to correct screen, active button has correct color, headbar has correct header', () => {

        navigationBar.goToTools().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.tools);

        navigationBar.goToReferenceGroup().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.referenceGroup);

        navigationBar.goToCategoricalScales().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.categoricalScales);

        navigationBar.goToBatteries().should('have.css', 'background-color', colors.activNavigationButton);
        headBar.header.should('have.text', headbarHeaders.batteries);
        

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
