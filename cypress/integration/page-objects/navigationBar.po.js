

export class NavigationBar {

    getButton(name) {
        return cy.contains('.MuiButtonBase-root', name)
    }

    goToClients() {
        return this.getButton('Klienci').click();
    }

    goToTests() {
        return this.getButton('Testy').click();
    }

    goToInstitution() {
        return this.getButton('Placówka').click();
    }

    goToDiagnosticians() {
        return this.getButton('Diagności').click();
    }

    goToReports() {
        return this.getButton('Raporty').click();
    }

}

export const navigationBar = new NavigationBar();
