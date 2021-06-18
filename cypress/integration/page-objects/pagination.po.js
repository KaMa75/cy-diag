const getPagCaptionInfo = (captionTxt) => {
    const info = captionTxt.split(/-| z /);
    return {
        firstElement: parseInt(info[0]),
        lastElement: parseInt(info[1]),
        allElements: parseInt(info[2]),
        visibleElements: parseInt(info[1]) - (parseInt(info[0]) - 1)
    }
}
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

    get pagCaption() {
        return this.rowsSelect.next();
    }

    get buttons() {
        return this.pagination.find('button');
    }

    get options() {
        return cy.get('.MuiPopover-root li');
    }

    getPagCaptionInfo(caption) {
        return getPagCaptionInfo(caption.text());
    }

    goToOptionsList() {
        return this.rowsSelect.click();
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
