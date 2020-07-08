/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My First Test case',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
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