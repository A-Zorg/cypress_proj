/// <reference types="cypress" />

import LoginPage from "../PageObjects/LoginPage";

describe('Cypress.Commands', () => {

  before(function () {
      cy.fixture('example').then(function(data) {
        this.data = data
      })
  })

  it('asdasdasd', function ()
      {
          cy.login(
              this.data.username,
              this.data.password,
              this.data.otpkey
          )
          // const lp = new LoginPage()
          // lp.visit()
          // lp.fillUsername(this.data.username)
          // lp.fillPassword(this.data.password)
          // lp.submitUser()
          // lp.fillTOTP(this.data.otpkey)
          // lp.submitTOTP()

  })
})