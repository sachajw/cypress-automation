/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My First Test case',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//mouse overs are not supported by cypress so you must use jquery
//force:true checks for hidden elements
cy.get('div.mouse-hover-content').invoke('show');
cy.contains('Top').click({ force:true });
cy.url().should('include','top');
});


});