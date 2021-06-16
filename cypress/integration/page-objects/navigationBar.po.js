

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

    goToInstitutions() {
        return this.getButton('Placówki').click();
    }

    goToDiagnosticians() {
        return this.getButton('Diagności').click();
    }

    goToReports() {
        return this.getButton('Raporty').click();
    }

    goToUsers() {
        return this.getButton('Użytkownicy').click();
    }

    goToBatteries() {
        return this.getButton('Baterie testów').click();
    }

    goToTools() {
        return this.getButton('Narzędzia diagnosty').click();
    }

    goToReferenceGroup() {
        return this.getButton('Grupy odniesienia').click();
    }

    goToCategoricalScales() {
        return this.getButton('Skale kategorialne').click();
    }

    goToPools() {
        return this.getButton('Ankiety i testy').click();
    }

    goToQuestions() {
        return this.getButton('Pytania').click();
    }

    goToAnswers() {
        return this.getButton('Odpowiedzi').click();
    }

    goToMovies() {
        return this.getButton('Filmy instruktażowe').click();
    }

    goToSchools() {
        return this.getButton('Szkoły').click();
    }

    goToPurchasePackages() {
        return this.getButton('Pakiety zakupowe').click();
    }

}

export const navigationBar = new NavigationBar();
