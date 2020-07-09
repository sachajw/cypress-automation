/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage';
import ProductsPage from '../pageObjects/ProductsPage';

describe('fixtures and before', function() 
{
    before(function() {
        //runs once before all tests in the block
        cy.fixture('example').then(function(data)
        { 
//this is a global variable and makes the data available everywhere
this.data=data;
        });
    });

it('fixtures',function() {
    //Javascript memory operator
    const homePage=new HomePage();
    const productsPage=new ProductsPage();

    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value',this.data.name);
    homePage.getEditBox().should('have.attr','minlength','2');
    homePage.getEntrepreneur().should('be.disabled');
    //explicitly declared for this spec file
    Cypress.config('defaultCommandTimeout', 8000);
    homePage.getShopTab().click();

    this.data.productName
    
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element);        
    });
    productsPage.checkOutButton().click();
    //adding up the numbers
    var sum=0;
    
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
    //used log to understand the output
    //cy.log($el.text());
    const amount=$el.text();
    //to reuse a variable use var over const
    var res=amount.split(" ");
    res=res[1].trim();
    sum=sum+res;
    cy.log(res);
//₹. 50000
//res[0]=₹.
//res[1]=50000;
    });
    cy.contains('Checkout').click();
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a');
    cy.get('#checkbox2').click({force: true});
    cy.get('input[type="submit"]').click();
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).');
    cy.get('.alert').then(function(element)
    {
        expect(actualText.includes("Success!")).to.be.true
    });
    //this is a global variable and makes the data available everywhere and that is how you call it
    //cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    //cy.get('select').select(this.data.gender);
    //cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name);
    //validating attributes
    //cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
    //cy.get('#inlineRadio3').should('be.disabled');
    //pause is great for debugging a troublesome step
    //cy.pause();
    //cy.get(':nth-child(2) > .nav-link').click();
    //use an array in your support/command.js file to specify multiple objects/products
    //custom cypress cmd created in command.js - dynamic data and not hardcoded
    });
});
