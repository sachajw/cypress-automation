/// <reference types="Cypress" />

describe('My First Test Suite', function()
{
    it('My First Test case',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1'); //check more reliable than click
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get("input[type=checkbox]").check(['option2','option3']);
    });

});