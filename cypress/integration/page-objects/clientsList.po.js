
export class ClientsList {
    get card() {
        return cy.get('main .MuiGrid-root > div').eq(1);
    }

    get cardHeader() {
        return this.card.find('h6');
    }

}

export const clientsList = new ClientsList();
