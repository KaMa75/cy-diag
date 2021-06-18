
export class ClientsList {
    get card() {
        return cy.get('main .MuiGrid-root > div').eq(1);
    }

    get cardHeader() {
        return this.card.find('h6');
    }

    get tableHeaderCols() {
        return this.card.find('thead').find('th');
    }

    get tableRows() {
        return this.card.find('tbody').find('tr');
    }

    get clients() {
        return this.card.find('tbody').find('tr > td:nth-child(2)');
    }

    get surveysDates() {
        return this.card.find('tbody').find('tr > td:nth-child(2)');
    }

    get status() {
        return this.card.find('tbody').find('tr > td:nth-child(2)');
    }

}

export const clientsList = new ClientsList();
