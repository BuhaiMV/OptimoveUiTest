module.exports = class Page {

    open (path) {
        cy.visit(`https://www.optimove.com/${path}`)
    }
}
