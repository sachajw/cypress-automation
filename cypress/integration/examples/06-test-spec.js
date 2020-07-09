/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My First Test case',function() {

//using environment variables from cypress.json with concatenation
cy.visit(Cypress.env('url')+"/AutomationPractice/");
//mouse overs are not supported by cypress so you must use jquery
//force:true checks for hidden elements
cy.get('div.mouse-hover-content').invoke('show');
cy.contains('Top').click({ force:true });
cy.url().should('include','top');
});


});