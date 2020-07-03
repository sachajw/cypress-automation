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
        //parent child chaining and aliasing
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4);
        //add two to the cart for the second product
        cy.get('.@productLocator').find('.product').eq(2).contains('ADD TO CART').click();
        //output terminal and browser console
        console.log('sf')
        //traversing through an array
        //add capisicum and cashews to the cart
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        //variable
        const testVeg=$el.find('h4.product-name').text();
        if(testVeg.includes('Cashews'));
        {
            $el.find('button').click();    
        }
    } );//assert if logo text is correctly dispalyed
        cy.get('brand').should('have.text', "GREENCART");

        //this prints out logs
        const log=cy.get('.brand').then(function(logelement)
        {
         cy.log(logelement.text());
        });
        //const log=cy.get('.brand');
        //cy.log(log.text())


} )