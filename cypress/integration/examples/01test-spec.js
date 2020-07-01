/// <reference types="Cypress" />

describe('My First Test Suite', function()
{
    it('My First Test case',function() {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //typing in the search box
        cy.get('.search-keyword').type('ca');
        //adding a hard wait of 2s for the products to load properly
        cy.wait(2000);
        //selenium get hits the url in browser, cypress get acts like FindElement in selenium
        //display 4 products and visible only
        cy.get('.product:visible').should('have.length',4);
        //parent child chaining
        cy.get('.products').find('.product').should('have.length',4);
        //add two to the cart for the second product
        cy.get('.products').find('.product').eq(2);


    } )

    

} )