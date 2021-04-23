/// <reference types="cypress" />

import users from '../data/usersData';

describe('Test navigation buttons', () => {

    before('Log In to app', () => {
        cy.logInToAdminApp(users.facCoordinator);
    });

    it('Should go to diagnostician list', () => {
        
    });

});
