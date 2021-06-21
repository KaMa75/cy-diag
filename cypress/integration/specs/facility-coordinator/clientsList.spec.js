/// <reference types="cypress" />

import users from '../../../data/usersData';
import colors from '../../../data/colors';
import headbarHeaders from '../../../data/headbarHeaders';
import clientsListCard from '../../../data/clientsListCard';
import paginationOptionsList from '../../../data/pagOptionsList';

import parseDate from '../../../utils/parseDate';
import { sortArrayTextAsc, sortArrayTextDesc } from '../../../utils/sortArrayText';

import { navigationBar } from '../../page-objects/navigationBar.po';
import { clientsList } from '../../page-objects/clientsList.po';
import { headBar } from '../../page-objects/headBar.po';
import { pagination } from '../../page-objects/pagination.po';

const logInAndGoToClients = (user) => {
    cy.logInToAdminApp(users.facCoordinator);
    headBar.header.then(($header) => {
        if($header.text() !== headbarHeaders.clients) {
            navigationBar.goToClients();
        }
    });
}

describe('Test clients list view - Facility Coordinator', () => {
    before('Log In to app', () => {
        logInAndGoToClients(users.facCoordinator);
    });
    
    beforeEach('Read localstorage', () => {
        cy.restoreLocalStorage();
    });
    
    afterEach('Read localstorage', () => {
        cy.saveLocalStorage();
    });

    // ---------------------------------------------------------------------------------

    it(`Should be ${clientsListCard.cardHeader} header`, () => {
        clientsList.cardHeader.should('have.text', clientsListCard.cardHeader);
    });

    it('Should have correct table columns', () => {
        clientsList.tableHeaderCols.each(($header, index) => {
            expect($header.text()).to.equal(clientsListCard.tableHeaders[index]);
        });
    });

    it('Should be default sorted descending by the last survey, sorted column have green header', () => {
        clientsList.tableHeaderCols.contains(clientsListCard.defaultSortedColumn).should('have.css', 'color', colors.sortedColumn);

        clientsList.surveysDates.then(($dates) => {

            const dates = [];

            cy.wrap($dates).each(($date, index) => {
                if($date.text()) {
                    dates[index] = parseDate($date.text());
                } else {
                    dates[index] = 0;
                }
            }).then(() => {
                const sortedDates = [...dates];
                sortedDates.sort((a, b) => b - a);
                const isSorted = dates.every((date, index) => date === sortedDates[index]);
                expect(isSorted, 'List is sorted descending by survey date').to.be.true;
            });

        });

    });

    it('Should be sorted ascending by the last survey, sorted column have green header', () => {

        logInAndGoToClients();
        clientsList.tableHeaderCols.contains(clientsListCard.tableHeaders[1]).click().should('have.css', 'color', colors.sortedColumn);
        cy.wait(1000);

        clientsList.surveysDates.then(($dates) => {

            const dates = [];

            cy.wrap($dates).each(($date, index) => {
                if($date.text()) {
                    dates[index] = parseDate($date.text());
                } else {
                    dates[index] = 0;
                }
            }).then(() => {
                const sortedDates = [...dates];
                sortedDates.sort((a, b) => a - b);
                const isSorted = dates.every((date, index) => date === sortedDates[index]);
                expect(isSorted, 'List is sorted ascending by survey date').to.be.true;
            });

        });

    });

    it('Should be sorted by the clients, sorted column have green header', () => {

        logInAndGoToClients();
        clientsList.tableHeaderCols.contains(clientsListCard.tableHeaders[0]).click().should('have.css', 'color', colors.sortedColumn);
        cy.wait(1000);

        clientsList.clients.then(($clients) => {

            const clients = [];

            cy.wrap($clients).each(($clients, index) => {
                clients[index] = $clients.text();
            }).then(() => {
                const sortedClients = sortArrayTextAsc(clients);
                const isSorted = clients.every((clients, index) => clients === sortedClients[index]);
                expect(isSorted, 'List is sorted ascending by clients').to.be.true;
            });

        });

        clientsList.tableHeaderCols.contains(clientsListCard.tableHeaders[0]).click().should('have.css', 'color', colors.sortedColumn);
        cy.wait(1000);

        clientsList.clients.then(($clients) => {

            const clients = [];

            cy.wrap($clients).each(($clients, index) => {
                clients[index] = $clients.text();
            }).then(() => {
                const sortedClients = sortArrayTextDesc(clients);
                const isSorted = clients.every((clients, index) => clients === sortedClients[index]);
                expect(isSorted, 'List is sorted descending by clients').to.be.true;
            });

        });

    });

    it.only('Should be sorted by the status, sorted column have green header', () => {

        logInAndGoToClients();
        clientsList.tableHeaderCols.contains(clientsListCard.tableHeaders[2]).click().should('have.css', 'color', colors.sortedColumn);
        cy.wait(1000);

        clientsList.status.then(($status) => {

            const status = [];

            cy.wrap($status).each(($status, index) => {
                status[index] = $status.text();
            }).then(() => {
                const sortedStatus = sortArrayTextAsc(status);
                const isSorted = status.every((status, index) => status === sortedStatus[index]);
                expect(isSorted, 'List is sorted ascending by status').to.be.true;
            });

        });

        clientsList.tableHeaderCols.contains(clientsListCard.tableHeaders[2]).click().should('have.css', 'color', colors.sortedColumn);
        cy.wait(1000);

        clientsList.status.then(($status) => {

            const status = [];

            cy.wrap($status).each(($status, index) => {
                status[index] = $status.text();
            }).then(() => {
                const sortedStatus = sortArrayTextDesc(status);
                const isSorted = status.every((status, index) => status === sortedStatus[index]);
                expect(isSorted, 'List is sorted descending by status').to.be.true;
            });

        });

    });

})

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

describe('Test clients list pagination - Facility Coordinator', () => {
    
    before('Log In to app', () => {
        logInAndGoToClients(users.facCoordinator);
    });
    
    beforeEach('Read localstorage', () => {
        cy.restoreLocalStorage();
    });
    
    afterEach('Read localstorage', () => {
        cy.saveLocalStorage();
    });

    // ---------------------------------------------------------------------------------
    
    it('Should be default pagination value after login - 10 rows', () => {
        pagination.rowsInput.should('have.value', '10');
    });

    it('Should have correct rows amount options', () => {
        pagination.goToOptionsList();
        pagination.options.each(($option, index) => {
            expect($option.text()).to.equal(paginationOptionsList[index]);
        });
    });

    it('Should be default pagination page number after card open - 1\'st page, prev/first buttons are diabled', () => {

        pagination.pagCaption.then(($caption) => {
            expect(pagination.getPagCaptionInfo($caption).firstElement).to.equal(1);
        });

        pagination.buttons.each(($button, index) => {
            if(index >= 0 && index <= 1) {
                cy.wrap($button).should('have.attr', 'disabled');
            }
        });

    });

    it('Should be go to next, prev, first page', () => {
        logInAndGoToClients(users.facCoordinator);

        pagination.pagCaption.then(($caption) => {
            const { lastElement, allElements } = pagination.getPagCaptionInfo($caption);
            
            if(lastElement !== allElements) {
                pagination.goToNextPage();
                pagination.pagCaption.then(($caption) => {
                    expect(lastElement + 1).to.equal(pagination.getPagCaptionInfo($caption).firstElement);
                });

                pagination.goToPrevPage();
                pagination.pagCaption.then(($caption) => {
                    expect(lastElement).to.equal(pagination.getPagCaptionInfo($caption).lastElement);
                });

                pagination.goToNextPage();
                pagination.goToFirstPage();
                pagination.pagCaption.then(($caption) => {
                    expect(lastElement).to.equal(pagination.getPagCaptionInfo($caption).lastElement);
                });
            }
            
        });
    });

    it('Should be go to last page, next/last buttons are disabled at last page', () => {
        logInAndGoToClients(users.facCoordinator);

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

    it('Should go to first page after choose other rows amount option', () => {
        logInAndGoToClients(users.facCoordinator);

        pagination.pagCaption.then(($caption) => {
            const { lastElement, allElements } = pagination.getPagCaptionInfo($caption);
            
            if(lastElement !== allElements) {
                pagination.goToNextPage();

                pagination.rowsInput.then(($input) => {
                    const currentOption = $input.val();
                    const options = [];

                    pagination.goToOptionsList();
                    pagination.options.each(($option, index) => {
                        options[index] = $option.text();
                    }).then(() => {
                        const nextOption = (options.indexOf(currentOption) + 1) % options.length;
                        pagination.options.eq(nextOption).click();
                    });
                    
                    pagination.pagCaption.then(($caption) => {
                        const { firstElement } = pagination.getPagCaptionInfo($caption);
                        expect(firstElement).to.equal(1);
                    });

                });
            }            
        });
    });

});
