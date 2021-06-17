/// <reference types="cypress" />

import users from '../../../data/usersData';
import colors from '../../../data/colors';
import headbarHeaders from '../../../data/headbarHeaders';
import cardsHeaders from '../../../data/cardsHeaders';

import { navigationBar } from '../../page-objects/navigationBar.po';
import { clientsList } from '../../page-objects/clientsList.po';
import { headBar } from '../../page-objects/headBar.po';
import { pagination } from '../../page-objects/pagination.po';

let userId;

describe('Test clients list - Facility Coordinator', () => {
    
    before('Log In to app', () => {
        cy.logInToAdminApp(users.facCoordinator);
        headBar.header.then(($header) => {
            if($header.text() !== headbarHeaders.clients) {
                navigationBar.goToClients();
            }
        })

        cy.getLocalStorage('diagmaticCurrentUserId').then(txt => {
            userId = txt;
        });
    });
    
    beforeEach('Read localstorage', () => {
        cy.restoreLocalStorage();
    });


    afterEach('Save localstorage', () => {
        cy.saveLocalStorage();
    });

    it(`Should be ${cardsHeaders.clientsList} header`, () => {
        clientsList.cardHeader.should('have.text', cardsHeaders.clientsList);
    });

    
    it('Should be default pagination value after login - 10 rows', () => {
        cy.getLocalStorage('diagmaticCurrentUserId').then(txt => {
            console.log(txt)
        });
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
        cy.logInToAdminApp(users.facCoordinator);

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

});
