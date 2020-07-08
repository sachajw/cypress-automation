/// <reference types="Cypress" />

describe('before after test one', function() 
{
    before(function() {
        //runs once before all tests in the block

    });

it('before after test one',function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    
    cy.get('input[name="name"]:nth-child(2)').type('Bob');
    cy.get('select').select('Female');

});

});
