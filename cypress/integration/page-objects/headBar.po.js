
export class HeadBar {
    // get header() {
    //     return cy.getHeadbar().find('h6.MuiTypography-root');
    // }
    get header() {
        return cy.get('main h6.MuiTypography-root').first();
    }
}

export const headBar = new HeadBar();
