let careers = require('../pageobjects/careers.page')
let testData = require('../../test-data/careers/careers.test-data')

describe('tests for careers page', () =>{
    it('check filter vacation by country', ()=>{
        careers.open()
        careers.clickForExtraLoading()
        careers.clickOnCountryFilter()
        careers.clickOnElementInCountyInFilter(testData.ukraine)
        careers.checkPosition(testData.qaAutomationEngineer)
    })
})