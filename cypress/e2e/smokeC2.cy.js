const CommonPage = require('../pages/CommonPage')
const common = new CommonPage();


describe('Smoke', () => {
    before( () => {
    cy.visit('/')
    common.login();
    })

    beforeEach( () => {
    cy.clearAllLocalStorage();
    cy.visit('/');
    common.login();
    })

    after( () => {
    })

    it('Create zone', () => {
    })

})
