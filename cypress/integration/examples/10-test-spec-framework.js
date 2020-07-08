/// <reference types="Cypress" />

describe('before after test one', function() 
{
    before(function() {
        //runs once before all tests in the block
        cy.fixture('example').then(function(data)
        { //this is a global variable and makes the data available everywhere
this.data=data;
        });
    });

it('before after test one',function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    //this is a global variable and makes the data available everywhere and that is how you call it
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('select').select(this.data.gender);
});
});
