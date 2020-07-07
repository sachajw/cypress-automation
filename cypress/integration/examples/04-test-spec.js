/// <reference types="Cypress" />

describe('My First Test Suite', function()
{
    it('My First Test case',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //pop ups e.g. alert button and confirm button
        cy.get('#alertbtn').click();
        cy.get("[value=Confirm]").click();
        
        //alert windows - on window:alert
        cy.on('window:alert',(str)=>
        
        {   //mocha framework
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });
        cy.on('window:confirm',(str)=>
        
        {   //mocha framework
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });    

    });

});