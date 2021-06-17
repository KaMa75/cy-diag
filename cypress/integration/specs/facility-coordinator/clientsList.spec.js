/// <reference types="cypress" />

import users from '../../../data/usersData';
import colors from '../../../data/colors';
import headbarHeaders from '../../../data/headbarHeaders';
import cardsHeaders from '../../../data/cardsHeaders';

import { navigationBar } from '../../page-objects/navigationBar.po';
import { clientsList } from '../../page-objects/clientsList.po';
import { headBar } from '../../page-objects/headBar.po';
import { pagination } from '../../page-objects/pagination.po';

let currentUrl = '';

describe('Test clients list header - Facility Coordinator', () => {

    before('Log In to app', () => {
        cy.logInToAdminApp(users.facCoordinator);
        headBar.header.then(($header) => {
            if($header.text() !== headbarHeaders.clients) {
                navigationBar.goToClients();
            }
        })
    });


    it(`Should be ${cardsHeaders.clientsList} header`, () => {
        clientsList.cardHeader.should('have.text', cardsHeaders.clientsList);
        cy.url().then((url) => {
            currentUrl = url;
        })
    });

    
    it('Should be default pagination value after login - 10 rows', () => {
        cy.visit(currentUrl);
        pagination.rowsInput.should('have.value', '10');
    });


    it('Should be default pagination page number after card open - 1\'st page, prev buttons are diabled', () => {

        pagination.pagCaption.then(($caption) => {
            expect(pagination.getPagCaptionInfo($caption).firstElement).to.equal(1);
        });

        pagination.buttons.each(($button, index) => {
            if(index >= 0 && index <= 1) {
                cy.wrap($button).should('have.attr', 'disabled');
            }
        });

    });

    it('Should be disabled next buttons at last page', () => {

        pagination.pagCaption.then(($caption) => {
            const { lastElement, allElements } = pagination.getPagCaptionInfo($caption);

            if(lastElement !== allElements) {
                pagination.goToLastPage();
            }            
            
        });
        
        pagination.pagCaption.then(($caption) => {
            const { lastElement, allElements } = pagination.getPagCaptionInfo($caption);

            expect(lastElement).to.equal(allElements);

            pagination.buttons.each(($button, index) => {
                if(index >= 2 && index <= 3) {
                    cy.wrap($button).should('have.attr', 'disabled');
                }
            });
        });

    });



    // after('Log out', () => {
    //     cy.logOut();
    // });

});
