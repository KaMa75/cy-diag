
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

    get surveysDates() {
        const dates = []
        this.tableRows.each(($tableRow, index) => {
            cy.wrap($tableRow).find('td').eq(1).then(($value) => {
                dates[index] = $value.text();
            });
        }).then(() => {
            console.log(dates)
            return dates;
        });
    }

}

export const clientsList = new ClientsList();
