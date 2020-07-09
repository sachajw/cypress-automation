/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My First Test case',function() {
//check boxes
//using environment variables from cypress.json with concatenation
cy.visit(Cypress.env('url')+"/AutomationPractice/");

//handling child windows
cy.get('#opentab').then(function(el)
{
    //store the value in a variable when using methods not supported by cypress
    const url=el.prop('href');
    cy.log(url);
    cy.visit(url);
});

});

});