/// <reference types="Cypress" />

describe('My First Test Suite', function()
{
    it('My First Test case',function() {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        //selenium get hit url in browser, cypress get acts like FindElement in selenium
        cy.get('.product').should('have.length',4)
        


    } )

    

} )