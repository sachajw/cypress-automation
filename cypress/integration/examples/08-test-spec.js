/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('iFrames Test', function() {

it('Testing iFrames',function() {

//using environment variables from cypress.json with concatenation
cy.visit(Cypress.env('url')+"/AutomationPractice/");
//handling frames
cy.frameLoaded('#courses-iframe');
cy.iframe().find("a[href*='mentorship']").eq(0).click();
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2);
});

});
