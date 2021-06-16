
export class Pagination {
    get pagination() {
        return cy.get('.MuiTablePagination-root');
    }

    get rowsSelect() {
        return this.pagination.find('.MuiInputBase-root');
    }

    get rowsInput() {
        return this.pagination.find('input');
    }

    get buttons() {
        return this.pagination.find('button');
    }

    goToFirstPage() {
        return this.buttons.eq(0).click();
    }

    goToPrevPage() {
        return this.buttons.eq(1).click();
    }

    goToNextPage() {
        return this.buttons.eq(2).click();
    }
    goToLastPage() {
        return this.buttons.eq(3).click();
    }

}

export const pagination = new Pagination();
