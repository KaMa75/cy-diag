
export class HeadBar {
    get header() {
        return cy.getHeadbar().find('h6.MuiTypography-root');
    }
}

export const headBar = new HeadBar();
