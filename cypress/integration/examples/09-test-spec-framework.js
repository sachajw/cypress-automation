/// <reference types="Cypress" />

describe('fixtures and before', function() 
{
    before(function() {
        //runs once before all tests in the block
        cy.fixture('example').then(function(data)
        { //this is a global variable and makes the data available everywhere
this.data=data;
        });
    });

it('fixtures',function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    //this is a global variable and makes the data available everywhere and that is how you call it
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('select').select(this.data.gender);
    cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name);
    //validating attributes
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
    cy.get('#inlineRadio3').should('be.disabled');
    cy.get(':nth-child(2) > .nav-link').click();
    //use an array in your support/command.js file to specify multiple objects/products
    //custom cypress cmd created in command.js - dynamic data and not hardcoded
    this.data.productName
    
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element);        
    });
    });
});
