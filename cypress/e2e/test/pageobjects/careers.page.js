const Page = require('./page');

class Careers extends Page {
    get filterBeforeExtraLoading(){
        return cy.get('div.select.select--job-locations')
    }

    get countryFilterAfterExtraLoading(){
        return cy.get('[class="selectric-wrapper"]:first', { timeout: 10000 })
    }

    get jobCard(){
        return cy.get('[class="job-card"]')
    }

    elementInCountryFilter = (country)=>{
        return cy.contains('li', country)
    }

    open () {
        super.open('careers');
    }

    clickForExtraLoading(){
        this.filterBeforeExtraLoading.click()
    }

    clickOnCountryFilter(){
        this.countryFilterAfterExtraLoading.click()
    }

    clickOnElementInCountyInFilter(country){
        this.elementInCountryFilter(country).click()
    }

    checkPosition(name){
        this.jobCard.contains(name).should('be.visible')
    }
}

module.exports = new Careers();