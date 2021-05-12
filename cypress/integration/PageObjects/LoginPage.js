// / <reference types="cypress" />

class LoginPage
{
    visit(){
        cy.visit('https://mytest.sg.com.ua:9999/login')
    }

    fillUsername(value){
        const button = cy.get('[type=submit]')
        button.should('be.disabled')

        const field = cy.get('#input-12')
        field.clear()
        field.type(value)

        return this
    }

    fillPassword(value){
        const field = cy.get('#input-16')
        field.clear()
        field.type(value)

        return this
    }

    submitUser(){
        const button = cy.get('[type=submit]')
        button.should('be.enabled')
        button.click()

        const url = cy.url()
        url.should('eq', 'https://mytest.sg.com.ua:9999/twofa')
    }

    fillTOTP(value){
        const {getTotp}  = require('minimal-cognito-totp')
        const token = getTotp(value)

        const button = cy.get('[type=submit]')
        button.should('be.disabled')

        const field = cy.get('#input-30')
        field.clear()
        field.type(token)
    }

    submitTOTP(){
        const button = cy.get('[type=submit]')
        button.should('be.enabled')
        button.click()

        const url = cy.url()
        url.should('eq', 'https://mytest.sg.com.ua:9999/')
    }

}
export default LoginPage