/// <reference types="cypress" />

import users from '../../../data/usersData';
import colors from '../../../data/colors';
import cardsHeaders from '../../../data/cardsHeaders';

import { navigationBar } from '../../page-objects/navigationBar.po';
import { clientsList } from '../../page-objects/clientsList.po';
import { headBar } from '../../page-objects/headBar.po';
import { pagination } from '../../page-objects/pagination.po';

describe('Test clients list header - Facility Coordinator', () => {

    before('Log In to app', () => {
        cy.logInToAdminApp(users.facCoordinator);
        navigationBar.goToClients();
    });

    it(`Should be ${cardsHeaders.clientsList} header`, () => {
        clientsList.cardHeader.should('have.text', cardsHeaders.clientsList);
    });

    
    it('Should be default pagination value after login - 10 rows', () => {
        pagination.rowsInput.should('have.value', '10');
    });

    it.only('Should be default pagination page number after card open - 1\'st page, prev buttons are diabled', () => {
        pagination.buttons.each(($button, index) => {
            if(index >= 0 && index <= 1) {
                cy.wrap($button).should('have.attr', 'disabled');
            }
        });
    });

    // after('Log out', () => {
    //     cy.logOut();
    // });

});
