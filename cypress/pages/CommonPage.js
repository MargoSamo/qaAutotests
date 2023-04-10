class CommonPage {

    constructor() {
        this.loginUsernameInput = '[id="username"]';
        this.loginSubmitButton = '[class="ui fluid primary button"]';
        this.loginPasswordInput = '[id="password"]';
        }

    login() {
        console.log("Hello")
        cy.get(this.loginUsernameInput).type('admin')
        cy.get(this.loginPasswordInput).type('admin')
        cy.get(this.loginSubmitButton).click
    }
}

module.exports = CommonPage
